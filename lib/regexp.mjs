/*
  Copyright 2023 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

const CLASS_MATCHER = '(?:[A-Z][a-z]+)+';

// Captures `class` in `@google-cloud/foo!google.api.Http:class`
export const KIND_REGEXP = /\:([a-z]+)$/;

// Captures ` (Class)` in `Http (Class)`
export const TITLE_KIND_REGEXP = / \([A-Za-z]+\)$/;

// Like `v2` or `v2beta` or `v1alpha4`
const VERSION_ID_MATCHER = 'v[0-9]+(?:[a-z]+[0-9]*)?';
export const VERSION_ID_REGEXP = new RegExp(VERSION_ID_MATCHER);

// Like `proto` or `someFunction`
const OTHER_SYMBOL_MATCHER = '[a-z]+' + CLASS_MATCHER;
// Matches `v2`, `someFunction`, and `PackageClient`; captures `PackageClient`
const ANY_SYMBOL_MATCHER = `(?:${VERSION_ID_MATCHER}|${OTHER_SYMBOL_MATCHER}|(${CLASS_MATCHER}))`;
// Matches `v2, someFunction, PackageClient`; captures `PackageClient`
const EXPORTS_MATCHER = `(?:${ANY_SYMBOL_MATCHER}, )*${ANY_SYMBOL_MATCHER}`;
// Matches `export { v2, someFunction, PackageClient };` captures `PackageClient`
const EXPORTED_CLASS_MATCHER = 'export { ' + EXPORTS_MATCHER + ' };';
export const EXPORTED_CLASS_REGEXP = new RegExp(EXPORTED_CLASS_MATCHER, 'g');
