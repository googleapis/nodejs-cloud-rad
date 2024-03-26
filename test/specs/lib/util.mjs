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

import {strict as assert} from 'assert';
import {packageShortNameRegex} from '../../../lib/util.mjs';

describe('package short name regex', () => {
  it('matches @google-cloud namespace', async () => {
    const googleCloudPackageName = '@google-cloud/retail'
    assert.deepEqual(googleCloudPackageName.match(packageShortNameRegex), ['@google-cloud/'])
  });

  it('matches other @google namespaces', async () => {
    const googleCloudPackageName = '@google-apps/meet'
    assert.deepEqual(googleCloudPackageName.match(packageShortNameRegex), ['@google-apps/'])
  });
})
