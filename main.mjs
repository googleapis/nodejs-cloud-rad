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
import createMetadata from './lib/metadata.mjs';
import fs from 'fs';
import generateDevsite from './lib/generate-devsite.mjs';
import {withLogs} from './lib/util.mjs'

// Deploys the docs.
function deploy() {
  const bucket = process.env.BUCKET || 'docs-staging-v2';
  const credentials =
    process.env.CREDENTIALS ||
    process.env.KOKORO_KEYSTORE_DIR + '/73713_docuploader_service_account';

  const args = [
    '-m',
    'docuploader',
    'upload',
    './_devsite',
    '--destination-prefix',
    'docfx',
    '--staging-bucket',
    bucket,
  ];

  if (credentials && fs.existsSync(credentials)) {
    args.push('--credentials', credentials);
  } else if (credentials) {
    console.warn(`Credentials file not found at ${credentials}. Skipping --credentials flag.`);
  }

  return withLogs(execa)('python3', args, process.cwd());
}

(async () => {
  await generateDevsite();

  if (process.env.NO_UPLOAD) {
    console.log('Generated documentation will not be uploaded.');
    process.exit(0);
  } else {
    await createMetadata();
    await deploy();
  }
})();
