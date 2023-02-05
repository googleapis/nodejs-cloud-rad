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
import {execa} from 'execa';
import fs from 'fs-extra';
import generateDevsite from '../../generate-devsite.mjs';
import {mochaHooks} from '../helpers.mjs';
import {join} from 'path';
import snapshots from '../../__snapshots__/generate-devsite.mjs.js';
import takeSnapshot from 'snap-shot-it';

let checkSnapshot = () => {};

before(async () => {
  if (!process.env.SNAPSHOT_UPDATE) {
    // We want to compare the output with the snapshots, not update snapshots.
    process.env.SNAPSHOT_UPDATE = 0;
    checkSnapshot = snapshot => {
      // The saved snapshot starts and ends with extra newline characters.
      const value = `\n${snapshot.value}\n`;

      assert.deepStrictEqual(value, snapshots[snapshot.key]);
    };
  }

  // Run the tool.
  const cwd = mochaHooks.nodeDeployDir;
  const packageInfo = await fs.readJson(
    join(mochaHooks.nodeDeployDir, 'package.json')
  );
  const packageShortName = packageInfo.name.replace('@google-cloud/', '');

  return generateDevsite({
    cwd,
    packageInfo,
    packageShortName,
  });
});

describe('cloud-rad docfx generator', () => {
  it('generates a toc.yml file', async () => {
    const tocYml = await fs.readFile(
      join(mochaHooks.nodeDeployDir, '_devsite', 'toc.yml'),
      'utf8'
    );
    const snapshot = takeSnapshot(tocYml);

    checkSnapshot(snapshot);
  });

  it('generates an index.md file', async () => {
    const indexMd = await fs.readFile(
      join(mochaHooks.nodeDeployDir, '_devsite', 'index.md'),
      'utf8'
    );
    const snapshot = takeSnapshot(indexMd);

    checkSnapshot(snapshot);
  });

  it('generates an overview.yml file', async () => {
    let overviewYml = await fs.readFile(
      join(mochaHooks.nodeDeployDir, '_devsite', 'overview.yml'),
      'utf8'
    );
    const snapshot = takeSnapshot(overviewYml);

    checkSnapshot(snapshot);
  });

  it('handles example tags', async () => {
    let contentYml = await fs.readFile(
      join(
        mochaHooks.nodeDeployDir,
        '_devsite',
        'deploy',
        'v1.clouddeployclient.yml'
      ),
      'utf8'
    );
    const snapshot = takeSnapshot(contentYml);

    checkSnapshot(snapshot);
  });

  it('generates an enum page', async () => {
    let contentYml = await fs.readFile(
      join(
        mochaHooks.nodeDeployDir,
        '_devsite',
        'deploy',
        'protos.google.cloud.deploy.v1.executionconfig.executionenvironmentusage.yml'
      ),
      'utf8'
    );
    const snapshot = takeSnapshot(contentYml);

    checkSnapshot(snapshot);
  });

  it('generates an interface page', async () => {
    let contentYml = await fs.readFile(
      join(
        mochaHooks.nodeDeployDir,
        '_devsite',
        'deploy',
        'protos.google.cloud.deploy.v1.release.itargetrender.yml'
      ),
      'utf8'
    );
    const snapshot = takeSnapshot(contentYml);

    checkSnapshot(snapshot);
  });

  it('generates a class page', async () => {
    let contentYml = await fs.readFile(
      join(
        mochaHooks.nodeDeployDir,
        '_devsite',
        'deploy',
        'protos.google.cloud.deploy.v1.approverolloutresponse.yml'
      ),
      'utf8'
    );
    const snapshot = takeSnapshot(contentYml);

    checkSnapshot(snapshot);
  });

  it('generates dependency pages', async () => {
    let contentYml = await fs.readFile(
      join(
        mochaHooks.nodeDeployDir,
        '_devsite',
        'deploy',
        'protos.google.rpc.status.yml'
      ),
      'utf8'
    );
    const snapshot = takeSnapshot(contentYml);

    checkSnapshot(snapshot);
  });
});
