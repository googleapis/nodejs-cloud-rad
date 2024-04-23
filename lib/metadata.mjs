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

import {execa} from 'execa';
import {getPackageShortName, withLogs} from './util.mjs'
import fs from 'fs-extra';
import {join} from 'path';

// Creates docs.metadata, based on package.json and .repo-metadata.json.
export default async function createMetadata(opts = {}) {
  const cwd = opts.cwd || process.cwd();
  const destination = opts.destination || join(process.cwd(), '_devsite'); 
  const packageInfo = await fs.readJson(join(cwd, 'package.json'));
  const packageShortName = getPackageShortName(packageInfo.name);
  const repoMetadata = await fs.readJson(join(cwd, '.repo-metadata.json'));

  await withLogs(execa)('pip', ['install', '-U', 'pip'], cwd)
  await withLogs(execa)('python3', ['-m', 'pip', 'install', '--user', 'gcp-docuploader'], cwd)
  await withLogs(execa)('python3', [
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
  ], cwd);

  if (cwd != destination) {
    return fs.copyFile(
        join(cwd, 'docs.metadata'),
        join(destination, 'docs.metadata')
      ); 
  }
}
