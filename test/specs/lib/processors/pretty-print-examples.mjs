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
import {globResults} from '../../../helpers.mjs';
import {join} from 'path';
import prettyPrintExamples from '../../../../lib/processors/pretty-print-examples.mjs';

describe('pretty-print examples processor', () => {
  it('replaces code fences with HTML in the `example` property', async () => {
    let obj = {
      items: [
        {
          uid: '@google-cloud/bigquery!BigQuery:class',
          summary: 'BigQuery summary.',
          example: [
            [
              'Install the client library:',
              '',
              '```',
              'npm install @google-cloud/bigquery',
              '```',
            ].join('\n'),
          ],
        },
      ],
    };

    await prettyPrintExamples.process({obj});

    assert(
      obj.items[0].example[0].includes(
        [
          '<pre class="prettyprint"><code>',
          'npm install @google-cloud/bigquery',
          '</code></pre>',
        ].join('\n')
      )
    );
  });

  it('does not replace code fences in other properties', async () => {
    let obj = {
      items: [
        {
          uid: '@google-cloud/bigquery!BigQuery:class',
          summary: 'BigQuery summary with ```\ncode fence\n```',
        },
      ],
    };

    await prettyPrintExamples.process({obj});

    assert.equal(
      obj.items[0].summary,
      'BigQuery summary with ```\ncode fence\n```'
    );
  });

  it('asks to process all YAML files', async () => {
    const actual = await globResults(
      join(process.cwd(), 'test', 'fixtures', 'sample-yaml-dir', 'yaml'),
      prettyPrintExamples.globPatterns
    );

    assert.deepStrictEqual(actual, ['bigquery.yml', 'compute.yml', 'toc.yml']);
  });
});
