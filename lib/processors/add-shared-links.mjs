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
const BASE_URL = 'https://cloud.google.com/nodejs/docs/reference';
const MEMBER_INFO = '![~]?(.*):(interface|class|type)';
const PACKAGES = [
  {
    url: `${BASE_URL}/google-auth-library/latest/google-auth-library`,
    regExp: new RegExp(`^google-auth-library${MEMBER_INFO}$`),
  },
  {
    url: `${BASE_URL}/common/latest/common`,
    regExp: new RegExp(`^@google-cloud/common${MEMBER_INFO}$`),
  },
];
const PROPS_WITH_HREFS = ['items', 'references'];

function addLinks(obj) {
  PROPS_WITH_HREFS.forEach(prop => {
    if (Object.hasOwn(obj, prop)) {
      obj[prop].forEach(value => {
        // Link to the first package that matches the UID.
        PACKAGES.some(pkg => {
          const match = value.uid && value.uid.match(pkg.regExp);
          if (match) {
            const member = match[1].toLowerCase();
            value.href = `${pkg.url}/${member}`;

            return true;
          }

          return false;
        });

        addLinks(value);
      });
    }
  });
}

const globPatterns = ['**/*.yml'];

// Adds doc links for members of @google-cloud/common and google-auth-library.
function process({metadata, obj}) {
  if (!metadata.isSharedPackage) {
    addLinks(obj);
  }

  return Promise.resolve(obj);
}

export default {globPatterns, process};
