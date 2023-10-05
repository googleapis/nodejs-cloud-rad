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

const CLOUD_PACKAGE_REGEXP = /^@google-cloud\/[A-Za-z-]+!/;
const LINKS = [
  {
    name: 'Quickstart',
    homepage: 'index.md',
  },
  {
    name: 'Overview',
    homepage: 'overview.html',
  },
];

const globPatterns = ['**/toc.yml'];

// Adds "Quickstart" and "Overview" links to the TOC for each package.
function process({obj}) {
  const packages = obj.items.filter(item =>
    // Match any @google-cloud package.
    CLOUD_PACKAGE_REGEXP.test(item.uid)
  );

  packages.forEach(pkg => {
    pkg.items = LINKS.concat(pkg.items || []);
  });

  return Promise.resolve(obj);
}

export default {globPatterns, process};
