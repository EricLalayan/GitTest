// Copyright (C) 2012 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.gerrit.server.util;

import com.google.inject.OutOfScopeException;
import com.google.inject.Scope;

import java.util.concurrent.Callable;

/**
 * {@link RequestScopePropagator} implementation for request scopes based on
 * a {@link ThreadLocal} context.
 *
 * @param <C> "context" type stored in the {@link ThreadLocal}.
 */
public abstract class ThreadLocalRequestScopePropagator<C>
    extends RequestScopePropagator {

  private final ThreadLocal<C> threadLocal;

  protected ThreadLocalRequestScopePropagator(Scope scope,
      ThreadLocal<C> threadLocal) {
    super(scope);
    this.threadLocal = threadLocal;
  }

  /**
   * @see RequestScopePropagator#wrap(Callable)
   */
  @Override
  protected final <T> Callable<T> wrapImpl(final Callable<T> callable) {
    final C ctx = continuingContext(requireContext());
    return new Callable<T>() {
      @Override
      public T call() throws Exception {
        if (threadLocal.get() != null) {
          // This is consistent with the Guice ServletScopes.continueRequest()
          // behavior.
          throw new IllegalStateException("Cannot continue request, "
              + "thread already has request in progress. A new thread must "
              + "be used to propagate the request scope context.");
        }

        threadLocal.set(ctx);
        try {
          return callable.call();
        } finally {
          threadLocal.remove();
        }
      }
    };
  }

  private C requireContext() {
    C context = threadLocal.get();
    if (context == null) {
      throw new OutOfScopeException("Cannot access scoped object");
    }
    return context;
  }

  /**
   * Returns a new context object based on the passed in context that has no
   * request scoped objects initialized.
   *
   * @param ctx the context to continue.
   * @return a new context.
   */
  protected abstract C continuingContext(C ctx);
}
