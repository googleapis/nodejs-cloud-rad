#!/usr/bin/env node

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
import {execa} from 'execa';
import fs from 'fs-extra';
import generateDevsite from './generate-devsite.mjs';
import {join} from 'path';

// Creates docs.metadata, based on package.json and .repo-metadata.json.
async function createMetadata() {
  const cwd = process.cwd();
  const packageInfo = await fs.readJson(join(cwd, 'package.json'));
  const packageShortName = packageInfo.name.replace('@google-cloud/', '');
  const repoMetadata = await fs.readJson(join(cwd, '.repo-metadata.json'));

  await execa('pip', ['install', '-U', 'pip']);
  await execa('python3', ['-m', 'pip', 'install', '--user', 'gcp-docuploader']);
  await execa('python3', [
    '-m',
    'docuploader',
    'create-metadata',
    `--name=${packageShortName}`,
    `--version=${packageInfo.version}`,
    `--language=${repoMetadata.language}`,
    `--distribution-name=${repoMetadata.distribution_name}`,
    `--product-page=${repoMetadata.product_documentation}`,
    `--github-repository=${repoMetadata.repo}`,
    `--issue-tracker=${repoMetadata.issue_tracker}`,
  ]);

  return fs.copyFile(
    join(cwd, 'docs.metadata'),
    join(cwd, '_devsite', 'docs.metadata')
  );
}

// Deploys the docs.
function deploy() {
  const bucket = process.env.BUCKET || 'docs-staging-v2';
  const credentials =
    process.env.CREDENTIALS ||
    process.env.KOKORO_KEYSTORE_DIR + '/73713_docuploader_service_account';

  return execa('python3', [
    '-m',
    'docuploader',
    'upload',
    './_devsite',
    '--destination-prefix',
    'docfx',
    '--credentials',
    credentials,
    '--staging-bucket',
    bucket,
  ]);
}

(async () => {
  await generateDevsite();

  // TODO(jefesaurus): Can we make this the default? That would create a better
  // experience for anyone outside of the Cloud RAD team who wants to run the
  // tool.
  if (process.env.NO_UPLOAD) {
    console.log('Generated documentation will not be uploaded.');
    process.exit(0);
  } else {
    await createMetadata();
    await deploy();
  }
})();
