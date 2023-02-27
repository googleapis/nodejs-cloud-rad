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
import addSharedLinks from '../../../../lib/processors/add-shared-links.mjs';
import {strict as assert} from 'assert';
import {globResults} from '../../../helpers.mjs';
import {join} from 'path';

describe('add shared links processor', () => {
  it('processes items recursively', async () => {
    let obj = {
      items: [
        {
          uid: 'google-auth-library!SampleClass:class',
          items: [
            {
              uid: '@google-cloud/common!ISampleInterface:interface',
            },
          ],
        },
      ],
    };

    await addSharedLinks.process({metadata: {}, obj});

    assert(typeof obj.items[0].href === 'string');
    assert(typeof obj.items[0].items[0].href === 'string');
  });

  it('ignores the shared packages themselves when appropriate', async () => {
    let obj = {
      items: [{uid: 'google-auth-library!SampleClass:class'}],
    };

    await addSharedLinks.process({metadata: {isSharedPackage: true}, obj});

    assert(typeof obj.items[0].href === 'undefined');
  });

  it('asks to process all YAML files', async () => {
    const actual = await globResults(
      join(process.cwd(), 'test', 'fixtures', 'sample-yaml-dir', 'yaml'),
      addSharedLinks.globPatterns
    );

    assert.deepStrictEqual(actual, ['bigquery.yml', 'compute.yml', 'toc.yml']);
  });

  describe('classes', () => {
    it('adds links for google-auth-library classes', async () => {
      let obj = {
        items: [{uid: 'google-auth-library!SampleClass:class'}],
        references: [{uid: 'google-auth-library!SampleClass:class'}],
      };
      const expectedHref =
        'https://cloud.google.com/nodejs/docs/reference/google-auth-library/latest/google-auth-library/sampleclass';

      await addSharedLinks.process({metadata: {}, obj});

      assert.equal(obj.items[0].href, expectedHref);
      assert.equal(obj.references[0].href, expectedHref);
    });

    it('adds links for @google-cloud classes', async () => {
      let obj = {
        items: [{uid: '@google-cloud/common!SampleClass:class'}],
        references: [{uid: '@google-cloud/common!SampleClass:class'}],
      };
      const expectedHref =
        'https://cloud.google.com/nodejs/docs/reference/common/latest/common/sampleclass';

      await addSharedLinks.process({metadata: {}, obj});

      assert.equal(obj.items[0].href, expectedHref);
      assert.equal(obj.references[0].href, expectedHref);
    });
  });

  describe('interfaces', () => {
    it('adds links for google-auth-library interfaces', async () => {
      let obj = {
        items: [{uid: 'google-auth-library!ISampleInterface:interface'}],
        references: [{uid: 'google-auth-library!ISampleInterface:interface'}],
      };
      const expectedHref =
        'https://cloud.google.com/nodejs/docs/reference/google-auth-library/latest/google-auth-library/isampleinterface';

      await addSharedLinks.process({metadata: {}, obj});

      assert.equal(obj.items[0].href, expectedHref);
      assert.equal(obj.references[0].href, expectedHref);
    });

    it('adds links for @google-cloud interfaces', async () => {
      let obj = {
        items: [{uid: '@google-cloud/common!ISampleInterface:interface'}],
        references: [{uid: '@google-cloud/common!ISampleInterface:interface'}],
      };
      const expectedHref =
        'https://cloud.google.com/nodejs/docs/reference/common/latest/common/isampleinterface';

      await addSharedLinks.process({metadata: {}, obj});

      assert.equal(obj.items[0].href, expectedHref);
      assert.equal(obj.references[0].href, expectedHref);
    });
  });

  describe('types', () => {
    it('adds links for google-auth-library types', async () => {
      let obj = {
        items: [{uid: 'google-auth-library!SampleType:type'}],
        references: [{uid: 'google-auth-library!SampleType:type'}],
      };
      const expectedHref =
        'https://cloud.google.com/nodejs/docs/reference/google-auth-library/latest/google-auth-library/sampletype';

      await addSharedLinks.process({metadata: {}, obj});

      assert.equal(obj.items[0].href, expectedHref);
      assert.equal(obj.references[0].href, expectedHref);
    });

    it('adds links for @google-cloud types', async () => {
      let obj = {
        items: [{uid: '@google-cloud/common!SampleType:type'}],
        references: [{uid: '@google-cloud/common!SampleType:type'}],
      };
      const expectedHref =
        'https://cloud.google.com/nodejs/docs/reference/common/latest/common/sampletype';

      await addSharedLinks.process({metadata: {}, obj});

      assert.equal(obj.items[0].href, expectedHref);
      assert.equal(obj.references[0].href, expectedHref);
    });
  });
});
