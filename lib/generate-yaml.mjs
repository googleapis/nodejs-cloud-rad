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

import {execaNode, execa} from 'execa';
import fs from 'fs-extra';
import {createRequire} from 'module';
import {join, resolve} from 'path';
import ts from 'typescript';
import {withLogs} from './util.mjs';

const require = createRequire(import.meta.url);

// Resolve the CLIs from cloud-rad's own dependencies instead of
// `<cwd>/node_modules/.bin`. That .bin layout is npm-specific: pnpm writes
// shell-script shims there (which can't be run with `node`), and doesn't link
// bins of transitive dependencies at all.
const apiExtractorBin = require.resolve(
  '@microsoft/api-extractor/bin/api-extractor'
);
const apiDocumenterBin = require.resolve(
  '@googleapis/api-documenter/bin/api-documenter'
);

/**
 * Returns the declarationDir (or outDir, if declarationDir is unset) from the
 * package's tsconfig.json, or undefined if it can't be determined. Uses
 * TypeScript's own parser so `extends`, comments, and trailing commas work.
 */
function getDeclarationDir(cwd) {
  const tsconfigPath = join(cwd, 'tsconfig.json');
  if (!fs.existsSync(tsconfigPath)) {
    return undefined;
  }
  const parsed = ts.getParsedCommandLineOfConfigFile(
    tsconfigPath,
    /* optionsToExtend */ {},
    {...ts.sys, onUnRecoverableConfigFileDiagnostic: () => {}}
  );
  if (!parsed) {
    return undefined;
  }
  // TypeScript resolves these to absolute paths.
  return parsed.options.declarationDir || parsed.options.outDir;
}

/**
 * Finds the .d.ts file API Extractor should use as its entry point. Checks,
 * in order:
 *   1. build/src/index.d.ts, then build/cjs/src/index.d.ts
 *   2. <tsconfig declarationDir (or outDir)>/src/index.d.ts
 *   3. package.json "types" (or "typings")
 */
export function findEntryPoint(cwd) {
  const candidates = [
    join(cwd, 'build', 'src', 'index.d.ts'),
    join(cwd, 'build', 'cjs', 'src', 'index.d.ts'),
  ];

  const declarationDir = getDeclarationDir(cwd);
  if (declarationDir) {
    candidates.push(join(declarationDir, 'src', 'index.d.ts'));
  }

  const packageJsonPath = join(cwd, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageInfo = fs.readJsonSync(packageJsonPath);
    const types = packageInfo.types || packageInfo.typings;
    if (types) {
      candidates.push(resolve(cwd, types));
    }
  }

  const entryPoint = candidates.find(candidate => fs.existsSync(candidate));
  if (!entryPoint) {
    throw new Error(
      'Could not find a TypeScript declaration entry point for API Extractor. ' +
        'Has the package been compiled? Checked:\n  ' +
        candidates.join('\n  ')
    );
  }
  return entryPoint;
}

export default async function generate(opts) {
  // 1. Set up the environment so that the docs can be generated
  const cloudRadPath = opts.cloudRadPath;
  const cwd = opts.cwd;
  const outputDir = join(cwd, 'yaml');
  const tmpDir = opts.tmpDir;

  const mainEntryPointFilePath = findEntryPoint(cwd);

  // Create API Extractor config file for the package.
  const apiExtractorConfig = {
    extends: join(cloudRadPath, 'api-extractor.json'),
    mainEntryPointFilePath: mainEntryPointFilePath,
    projectFolder: cwd,
  };
  const apiExtractorConfigPath = join(cwd, 'api-extractor.json');
  // It should be possible to override this default value in the config file via
  // `apiReport.reportTempFolder`, but getting that to work will require more
  // experimentation.
  const apiExtractorTempPath = join(cwd, 'temp');

  await fs.writeFile(
    apiExtractorConfigPath,
    JSON.stringify(apiExtractorConfig, null, 2)
  );
  await fs.ensureDir(apiExtractorTempPath);
  await withLogs(execaNode)(apiExtractorBin, ['run', '--local'], tmpDir);
  await fs.copy(apiExtractorTempPath, tmpDir);
  await fs.remove(apiExtractorTempPath);
  await fs.remove(apiExtractorConfigPath);

  await fs.copy(join(cloudRadPath, 'api-extractor-configs'), tmpDir);

  // Track whether we create a symlink so we can clean it up later.
  let createdSymlink = false;

  // 2. Clone the samples locally so that region tags can be found by cloud-rad
  // Example: One method has the region tag spanner_read_only_transaction
  // We want it to find the sample with [START spanner_read_only_transaction] and [END spanner_read_only_transaction]
  // This will prevent deployment errors for releases

  // Define the path where the docs-samples repository will be cloned within the temporary directory.
  const docsSamplesPath = join(tmpDir, 'nodejs-docs-samples');

  // Check if the docs-samples repository has not already been cloned.
  if (!fs.existsSync(docsSamplesPath)) {
    // Execute a shallow git clone of the nodejs-docs-samples repository.
    await withLogs(execa)(
      'git',
      [
        'clone',
        '--depth',
        '1',
        'https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git',
        docsSamplesPath,
      ],
      // Run the clone command inside the temporary directory.
      tmpDir
    );
  }

  // Determine the source path of the specific package's samples within the cloned repository.
  const sampleSrcPath = join(docsSamplesPath, opts.packageShortName);

  // Determine the destination path where the samples symlink should be created in the current working directory.
  const sampleDestPath = join(cwd, 'samples');

  // Check if the source samples directory exists and if a destination samples directory doesn't already exist.
  if (fs.existsSync(sampleSrcPath) && !fs.existsSync(sampleDestPath)) {
    // Create a symlink from the local samples folder to the cloned samples folder.
    await fs.symlink(sampleSrcPath, sampleDestPath);

    // Update the flag to indicate that we created the symlink.
    createdSymlink = true;
  }

  // 3. Write the documentation

  await withLogs(execaNode)(
    apiDocumenterBin,
    ['yaml', `--input-folder=${tmpDir}`, `--output-folder=${outputDir}`],
    // Use the real cwd so api-documenter can find the code samples.
    process.cwd()
  );

  if (createdSymlink) {
    await fs.remove(sampleDestPath);
  }
}
