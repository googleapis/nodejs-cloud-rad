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

const globPatterns = ['**/toc.yml'];

// Removes the top-level SharePoint node from the TOC.
// See https://github.com/microsoft/rushstack/issues/1229.
function process({obj}) {
  const firstItem = obj.items[0];

  if (firstItem.name && firstItem.name.includes('SharePoint')) {
    obj.items = firstItem.items;
  }

  return Promise.resolve(obj);
}

export default {globPatterns, process};
