/*
  Copyright 2024 Google LLC

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

import createMetadata from '../../../lib/metadata.mjs';
import fs from 'fs-extra';
import {join} from 'path';
import {mochaHooks, createTmpDir} from '../../helpers.mjs';
import snapshots from '../../../__snapshots__/metadata.mjs.js';
import {strict as assert} from 'assert';
import takeSnapshot from 'snap-shot-it';

let checkSnapshot = () => {};
const removeTimestamp = docsMetadata => {
    const lines = docsMetadata.split('\n');
    const snapshotLines = lines.slice(4).join('\n');
    return snapshotLines;
}

before(async () => {
    if (!process.env.SNAPSHOT_UPDATE) {
      // We want to compare the output with the snapshots, not update snapshots.
      checkSnapshot = snapshot => {
        // The saved snapshot starts and ends with extra newline characters.
        const value = `\n${snapshot.value}\n`;
  
        assert.deepStrictEqual(value, snapshots[snapshot.key]);
      };
    }
});

describe('docs.metadata generation', () => {
    it('generates for google-cloud libraries', async () => {
        const cwd = mochaHooks.googleCloudDeployDir;
        const destination = cwd;
        await createMetadata({
            cwd, 
            destination,
        });

        const docsMetadata = await fs.readFile(
            join(mochaHooks.googleCloudDeployDir, 'docs.metadata'),
            'utf8'
        );
        const snapshot = takeSnapshot(removeTimestamp(docsMetadata));

        checkSnapshot(snapshot);
    });

    it('generates for non-cloud libraries', async () => {
        const tmpDir = await createTmpDir();

        const googleMeetsDir = join(process.cwd(), 'test', 'fixtures', 'google-apps-meet');
        await fs.copy(googleMeetsDir, tmpDir);

        const cwd = tmpDir
        const destination = cwd;
        await createMetadata({
            cwd, 
            destination,
        });

        const docsMetadata = await fs.readFile(
            join(tmpDir, 'docs.metadata'),
            'utf8'
        );
        const snapshot = takeSnapshot(removeTimestamp(docsMetadata))

        checkSnapshot(snapshot);
    });    
});
