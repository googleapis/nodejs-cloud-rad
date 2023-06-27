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
import organizeToc from '../../../../lib/processors/organize-toc.mjs';

describe('organize TOC processor', () => {
  let metadata;

  beforeEach(() => {
    metadata = {
      // Specify version numbers manually, rather than checking the API model.
      _versions: ['v1'],
      cwd: join(process.cwd(), 'test', 'fixtures', 'declarations'),
      packageInfo: {
        name: '@google-cloud/foo',
      },
      packageShortName: 'foo',
      tmpDir: join(process.cwd(), 'test', 'fixtures', 'api-model'),
    };
  });

  it('asks to process toc.yml files', async () => {
    const actual = await globResults(
      join(process.cwd(), 'test', 'fixtures', 'sample-yaml-dir', 'yaml'),
      organizeToc.globPatterns
    );

    assert.deepStrictEqual(actual, ['toc.yml']);
  });

  it('differentiates between top-level exported classes and other classes', async () => {
    const actual = await organizeToc.process({
      metadata,
      obj: {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'SomeProtoClass',
                uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/foo!v1.FooClient:class',
              },
            ],
          },
        ],
      },
    });
    const expected = {
      items: [
        {
          name: 'foo',
          uid: '@google-cloud/foo!',
          items: [
            {
              name: 'FooClient',
              uid: '@google-cloud/foo!v1.FooClient:class',
            },
            {
              name: 'Classes',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'SomeProtoClass',
                      uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('removes redundant classifiers from names', async () => {
    const actual = await organizeToc.process({
      metadata,
      obj: {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'SomeProtoClass (Class)',
                uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/foo!v1.FooClient:class',
              },
            ],
          },
        ],
      },
    });
    const expected = {
      items: [
        {
          name: 'foo',
          uid: '@google-cloud/foo!',
          items: [
            {
              name: 'FooClient',
              uid: '@google-cloud/foo!v1.FooClient:class',
            },
            {
              name: 'Classes',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'SomeProtoClass',
                      uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('preserves items with an unrecognized kind', async () => {
    const actual = await organizeToc.process({
      metadata,
      obj: {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'RandomWidget',
                uid: '@google-cloud/foo!protos.google.foo.v1.RandomWidget:widget',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/foo!v1.FooClient:class',
              },
            ],
          },
        ],
      },
    });
    const expected = {
      items: [
        {
          name: 'foo',
          uid: '@google-cloud/foo!',
          items: [
            {
              name: 'FooClient',
              uid: '@google-cloud/foo!v1.FooClient:class',
            },
            {
              name: 'RandomWidget',
              uid: '@google-cloud/foo!protos.google.foo.v1.RandomWidget:widget',
            },
          ],
        },
      ],
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('separates out classes, other than top-level exports', async () => {
    const actual = await organizeToc.process({
      metadata,
      obj: {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'SomeProtoClass',
                uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/foo!v1.FooClient:class',
              },
              {
                name: 'AnotherProtoClass',
                uid: '@google-cloud/foo!protos.google.foo.v1.AnotherProtoClass:class',
              },
            ],
          },
        ],
      },
    });
    const expected = {
      items: [
        {
          name: 'foo',
          uid: '@google-cloud/foo!',
          items: [
            {
              name: 'FooClient',
              uid: '@google-cloud/foo!v1.FooClient:class',
            },
            {
              name: 'Classes',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'AnotherProtoClass',
                      uid: '@google-cloud/foo!protos.google.foo.v1.AnotherProtoClass:class',
                    },
                    {
                      name: 'SomeProtoClass',
                      uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('separates out enums', async () => {
    const actual = await organizeToc.process({
      metadata,
      obj: {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'SomeProtoEnum',
                uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoEnum:enum',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/foo!v1.FooClient:class',
              },
            ],
          },
        ],
      },
    });
    const expected = {
      items: [
        {
          name: 'foo',
          uid: '@google-cloud/foo!',
          items: [
            {
              name: 'FooClient',
              uid: '@google-cloud/foo!v1.FooClient:class',
            },
            {
              name: 'Enums',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'SomeProtoEnum',
                      uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoEnum:enum',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('separates out interfaces', async () => {
    const actual = await organizeToc.process({
      metadata,
      obj: {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'IProtoInterface',
                uid: '@google-cloud/foo!protos.google.foo.v1.IProtoInterface:interface',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/foo!v1.FooClient:class',
              },
            ],
          },
        ],
      },
    });
    const expected = {
      items: [
        {
          name: 'foo',
          uid: '@google-cloud/foo!',
          items: [
            {
              name: 'FooClient',
              uid: '@google-cloud/foo!v1.FooClient:class',
            },
            {
              name: 'Interfaces',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'IProtoInterface',
                      uid: '@google-cloud/foo!protos.google.foo.v1.IProtoInterface:interface',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('lists classes, then interfaces, then enums', async () => {
    const actual = await organizeToc.process({
      metadata,
      obj: {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'SomeProtoEnum',
                uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoEnum:enum',
              },
              {
                name: 'SomeProtoClass',
                uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
              },
              {
                name: 'IProtoInterface',
                uid: '@google-cloud/foo!protos.google.foo.v1.IProtoInterface:interface',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/foo!v1.FooClient:class',
              },
            ],
          },
        ],
      },
    });
    const expected = {
      items: [
        {
          name: 'foo',
          uid: '@google-cloud/foo!',
          items: [
            {
              name: 'FooClient',
              uid: '@google-cloud/foo!v1.FooClient:class',
            },
            {
              name: 'Classes',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'SomeProtoClass',
                      uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Interfaces',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'IProtoInterface',
                      uid: '@google-cloud/foo!protos.google.foo.v1.IProtoInterface:interface',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Enums',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'SomeProtoEnum',
                      uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoEnum:enum',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('sorts items by name within each known kind', async () => {
    const actual = await organizeToc.process({
      metadata,
      obj: {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'SomeProtoEnum',
                uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoEnum:enum',
              },
              {
                name: 'AnotherProtoEnum',
                uid: '@google-cloud/foo!protos.google.foo.v1.AnotherProtoEnum:enum',
              },
              {
                name: 'SomeProtoClass',
                uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
              },
              {
                name: 'AnotherProtoClass',
                uid: '@google-cloud/foo!protos.google.foo.v1.AnotherProtoClass:class',
              },
              {
                name: 'IProtoInterface',
                uid: '@google-cloud/foo!protos.google.foo.v1.IProtoInterface:interface',
              },
              {
                name: 'IAnotherProtoInterface',
                uid: '@google-cloud/foo!protos.google.foo.v1.IAnotherProtoInterface:interface',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/foo!v1.FooClient:class',
              },
            ],
          },
        ],
      },
    });
    const expected = {
      items: [
        {
          name: 'foo',
          uid: '@google-cloud/foo!',
          items: [
            {
              name: 'FooClient',
              uid: '@google-cloud/foo!v1.FooClient:class',
            },
            {
              name: 'Classes',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'AnotherProtoClass',
                      uid: '@google-cloud/foo!protos.google.foo.v1.AnotherProtoClass:class',
                    },
                    {
                      name: 'SomeProtoClass',
                      uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Interfaces',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'IAnotherProtoInterface',
                      uid: '@google-cloud/foo!protos.google.foo.v1.IAnotherProtoInterface:interface',
                    },
                    {
                      name: 'IProtoInterface',
                      uid: '@google-cloud/foo!protos.google.foo.v1.IProtoInterface:interface',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Enums',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'AnotherProtoEnum',
                      uid: '@google-cloud/foo!protos.google.foo.v1.AnotherProtoEnum:enum',
                    },
                    {
                      name: 'SomeProtoEnum',
                      uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoEnum:enum',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('does not change the order of items with the same name', async () => {
    const actual = await organizeToc.process({
      metadata,
      obj: {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'SomeProtoClass',
                uid: '@google-cloud/foo!protos.google.foo.v1.SomeOtherProtoClass:class',
              },
              {
                name: 'SomeProtoClass',
                uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/foo!v1.FooClient:class',
              },
            ],
          },
        ],
      },
    });
    const expected = {
      items: [
        {
          name: 'foo',
          uid: '@google-cloud/foo!',
          items: [
            {
              name: 'FooClient',
              uid: '@google-cloud/foo!v1.FooClient:class',
            },
            {
              name: 'Classes',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'SomeProtoClass',
                      uid: '@google-cloud/foo!protos.google.foo.v1.SomeOtherProtoClass:class',
                    },
                    {
                      name: 'SomeProtoClass',
                      uid: '@google-cloud/foo!protos.google.foo.v1.SomeProtoClass:class',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('handles interfaces whose names contain a digit', async () => {
    let actual;

    async function setActual() {
      actual = await organizeToc.process({
        metadata,
        obj: {
          items: [
            {
              name: 'foo',
              uid: '@google-cloud/foo!',
              items: [
                {
                  name: 'IProtoInterfaceV1',
                  uid: '@google-cloud/foo!protos.google.foo.v1.IProtoInterfaceV1:interface',
                },
              ],
            },
          ],
        },
      });
    }

    const expected = {
      items: [
        {
          name: 'foo',
          uid: '@google-cloud/foo!',
          items: [
            {
              name: 'Interfaces',
              items: [
                {
                  name: 'protos.google.foo.v1',
                  items: [
                    {
                      name: 'IProtoInterfaceV1',
                      uid: '@google-cloud/foo!protos.google.foo.v1.IProtoInterfaceV1:interface',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    await assert.doesNotReject(setActual);
    assert.deepStrictEqual(actual, expected);
  });

  describe('namespaces', () => {
    let toc;

    beforeEach(() => {
      // Don't override the version number for these tests; let `organizeToc`
      // get version numbers from the API package.
      delete metadata._versions;

      toc = {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'FooMetadata',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1.FooMetadata:class',
              },
              {
                name: 'FooSize',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1.FooSize:enum',
              },
              {
                name: 'IFooMetadata',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1.IFooMetadata:interface',
              },
              {
                name: 'FooMetadata',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha1.FooMetadata:class',
              },
              {
                name: 'FooSize',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha1.FooSize:enum',
              },
              {
                name: 'IFooMetadata',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha1.IFooMetadata:interface',
              },
              {
                name: 'FooMetadata',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha2.FooMetadata:class',
              },
              {
                name: 'FooSize',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha2.FooSize:enum',
              },
              {
                name: 'IFooMetadata',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha2.IFooMetadata:interface',
              },
              {
                name: 'FooMetadata',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1beta.FooMetadata:class',
              },
              {
                name: 'FooSize',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1beta.FooSize:enum',
              },
              {
                name: 'IFooMetadata',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1beta.IFooMetadata:interface',
              },
              {
                name: 'FooMetadata',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v2.FooMetadata:class',
              },
              {
                name: 'FooSize',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v2.FooSize:enum',
              },
              {
                name: 'IFooMetadata',
                uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v2.IFooMetadata:interface',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/cloud-rad!v1.FooClient:class',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/cloud-rad!v1alpha1.FooClient:class',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/cloud-rad!v1alpha2.FooClient:class',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/cloud-rad!v1beta.FooClient:class',
              },
              {
                name: 'FooClient',
                uid: '@google-cloud/cloud-rad!v2.FooClient:class',
              },
            ],
          },
        ],
      };
    });

    it('groups by namespace', async () => {
      const actual = await organizeToc.process({
        metadata,
        obj: toc,
      });
      const expected = {
        items: [
          {
            name: 'foo',
            uid: '@google-cloud/foo!',
            items: [
              {
                name: 'FooClient',
                uid: '@google-cloud/cloud-rad!v2.FooClient:class',
              },
              {
                name: 'Classes',
                items: [
                  {
                    name: 'protos.google.cloud.foo.v1',
                    items: [
                      {
                        name: 'FooMetadata',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1.FooMetadata:class',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v1alpha1',
                    items: [
                      {
                        name: 'FooMetadata',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha1.FooMetadata:class',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v1alpha2',
                    items: [
                      {
                        name: 'FooMetadata',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha2.FooMetadata:class',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v1beta',
                    items: [
                      {
                        name: 'FooMetadata',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1beta.FooMetadata:class',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v2',
                    items: [
                      {
                        name: 'FooMetadata',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v2.FooMetadata:class',
                      },
                    ],
                  },
                  {
                    name: 'v1',
                    items: [
                      {
                        name: 'FooClient',
                        uid: '@google-cloud/cloud-rad!v1.FooClient:class',
                      },
                    ],
                  },
                  {
                    name: 'v1alpha1',
                    items: [
                      {
                        name: 'FooClient',
                        uid: '@google-cloud/cloud-rad!v1alpha1.FooClient:class',
                      },
                    ],
                  },
                  {
                    name: 'v1alpha2',
                    items: [
                      {
                        name: 'FooClient',
                        uid: '@google-cloud/cloud-rad!v1alpha2.FooClient:class',
                      },
                    ],
                  },
                  {
                    name: 'v1beta',
                    items: [
                      {
                        name: 'FooClient',
                        uid: '@google-cloud/cloud-rad!v1beta.FooClient:class',
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Interfaces',
                items: [
                  {
                    name: 'protos.google.cloud.foo.v1',
                    items: [
                      {
                        name: 'IFooMetadata',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1.IFooMetadata:interface',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v1alpha1',
                    items: [
                      {
                        name: 'IFooMetadata',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha1.IFooMetadata:interface',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v1alpha2',
                    items: [
                      {
                        name: 'IFooMetadata',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha2.IFooMetadata:interface',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v1beta',
                    items: [
                      {
                        name: 'IFooMetadata',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1beta.IFooMetadata:interface',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v2',
                    items: [
                      {
                        name: 'IFooMetadata',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v2.IFooMetadata:interface',
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Enums',
                items: [
                  {
                    name: 'protos.google.cloud.foo.v1',
                    items: [
                      {
                        name: 'FooSize',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1.FooSize:enum',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v1alpha1',
                    items: [
                      {
                        name: 'FooSize',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha1.FooSize:enum',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v1alpha2',
                    items: [
                      {
                        name: 'FooSize',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1alpha2.FooSize:enum',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v1beta',
                    items: [
                      {
                        name: 'FooSize',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v1beta.FooSize:enum',
                      },
                    ],
                  },
                  {
                    name: 'protos.google.cloud.foo.v2',
                    items: [
                      {
                        name: 'FooSize',
                        uid: '@google-cloud/cloud-rad!protos.google.cloud.foo.v2.FooSize:enum',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      };

      assert.deepStrictEqual(actual, expected);
    });
  });
});
