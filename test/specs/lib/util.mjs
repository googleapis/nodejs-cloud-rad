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

import {getPackageShortName} from '../../../lib/util.mjs';
import {strict as assert} from 'assert';

describe('get package short name', () => {
  it('shortens @google-cloud namespace', async () => {
    const googleCloudPackageName = '@google-cloud/retail'
    const result = getPackageShortName(googleCloudPackageName)
    assert.deepEqual(result, 'retail')
  });

  it('shortens other @google namespaces', async () => {
    const googleCloudPackageName = '@googlemaps/places'
    const result = getPackageShortName(googleCloudPackageName)
    assert.deepEqual(result, 'places')
  });

  it('raises an error for non-Google namespaces', async () => {
    const nonGoogleCloudPackageName = '@other-namespace/app'

    assert.throws(() => getPackageShortName(nonGoogleCloudPackageName), Error)
  });
  
})
