/**
 * @license
 * Copyright (C) 2020 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @desc Tab names for primary tabs on change view page.
 */
export enum PrimaryTab {
  FILES = 'files',
  /**
   * When renaming this, the links in UrlFormatter must be updated.
   */
  COMMENT_THREADS = 'comments',
  FINDINGS = 'findings',
}

/**
 * @desc Tab names for secondary tabs on change view page.
 */
export enum SecondaryTab {
  CHANGE_LOG = '_changeLog',
}

/**
 * @desc Tag names of change log messages.
 */
export enum MessageTag {
  TAG_DELETE_REVIEWER = 'autogenerated:gerrit:deleteReviewer',
  TAG_NEW_PATCHSET = 'autogenerated:gerrit:newPatchSet',
  TAG_NEW_WIP_PATCHSET = 'autogenerated:gerrit:newWipPatchSet',
  TAG_REVIEWER_UPDATE = 'autogenerated:gerrit:reviewerUpdate',
  TAG_SET_PRIVATE = 'autogenerated:gerrit:setPrivate',
  TAG_UNSET_PRIVATE = 'autogenerated:gerrit:unsetPrivate',
  TAG_SET_READY = 'autogenerated:gerrit:setReadyForReview',
  TAG_SET_WIP = 'autogenerated:gerrit:setWorkInProgress',
  TAG_SET_ASSIGNEE = 'autogenerated:gerrit:setAssignee',
  TAG_UNSET_ASSIGNEE = 'autogenerated:gerrit:deleteAssignee',
}

/**
 * @desc Modes for gr-diff-cursor
 * The scroll behavior for the cursor. Values are 'never' and
 * 'keep-visible'. 'keep-visible' will only scroll if the cursor is beyond
 * the viewport.
 */
export enum ScrollMode {
  KEEP_VISIBLE = 'keep-visible',
  NEVER = 'never',
}

/**
 * @desc Specifies status for a change
 */
export enum ChangeStatus {
  ABANDONED = 'ABANDONED',
  MERGED = 'MERGED',
  NEW = 'NEW',
}

/**
 * @desc Special file paths
 */
export enum SpecialFilePath {
  PATCHSET_LEVEL_COMMENTS = '/PATCHSET_LEVEL',
  COMMIT_MESSAGE = '/COMMIT_MSG',
  MERGE_LIST = '/MERGE_LIST',
}

/**
 * @desc The reviewer state
 */
export enum RequirementStatus {
  OK = 'OK',
  NOT_READY = 'NOT_READY',
  RULE_ERROR = 'RULE_ERROR',
}

/**
 * @desc The reviewer state
 */
export enum ReviewerState {
  REVIEWER = 'REVIEWER',
  CC = 'CC',
  REMOVED = 'REMOVED',
}

/**
 * @desc The patchset kind
 */
export enum RevisionKind {
  REWORK = 'REWORK',
  TRIVIAL_REBASE = 'TRIVIAL_REBASE',
  MERGE_FIRST_PARENT_UPDATE = 'MERGE_FIRST_PARENT_UPDATE',
  NO_CODE_CHANGE = 'NO_CODE_CHANGE',
  NO_CHANGE = 'NO_CHANGE',
}

/**
 * @desc The status of fixing the problem
 */
export enum ProblemInfoStatus {
  FIXED = 'FIXED',
  FIX_FAILED = 'FIX_FAILED',
}

/**
 * @desc The status of the file
 */
export enum FileInfoStatus {
  ADDED = 'A',
  DELETED = 'D',
  RENAMED = 'R',
  COPIED = 'C',
  REWRITTEN = 'W',
  // Modifed = 'M', // but API not set it if the file was modified
  UNMODIFIED = 'U', // Not returned by BE, but added by UI for certain files
}

/**
 * @desc The status of the file
 */
export enum GpgKeyInfoStatus {
  BAD = 'BAD',
  OK = 'OK',
  TRUSTED = 'TRUSTED',
}

/**
 * @desc Used for server config of accounts
 */
export enum DefaultDisplayNameConfig {
  USERNAME = 'USERNAME',
  FIRST_NAME = 'FIRST_NAME',
  FULL_NAME = 'FULL_NAME',
}
