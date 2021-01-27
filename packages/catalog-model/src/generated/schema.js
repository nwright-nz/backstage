/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
exports.EntityMeta = validate20;
const schema22 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'EntityMeta',
  description: 'Metadata fields common to all versions/kinds of entity.',
  examples: [
    {
      uid: 'e01199ab-08cc-44c2-8e19-5c29ded82521',
      etag: 'lsndfkjsndfkjnsdfkjnsd==',
      generation: 13,
      name: 'my-component-yay',
      namespace: 'the-namespace',
      labels: { 'backstage.io/custom': 'ValueStuff' },
      annotations: { 'example.com/bindings': 'are-secret' },
      tags: ['java', 'data'],
    },
  ],
  type: 'object',
  required: ['name'],
  additionalProperties: true,
  properties: {
    uid: {
      type: 'string',
      description:
        'A globally unique ID for the entity. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations. The field can (optionally) be specified when performing update or delete operations, but the server is free to reject requests that do so in such a way that it breaks semantics.',
      examples: ['e01199ab-08cc-44c2-8e19-5c29ded82521'],
      minLength: 1,
    },
    etag: {
      type: 'string',
      description:
        'An opaque string that changes for each update operation to any part of the entity, including metadata. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations. The field can (optionally) be specified when performing update or delete operations, and the server will then reject the operation if it does not match the current stored value.',
      examples: ['lsndfkjsndfkjnsdfkjnsd=='],
      minLength: 1,
    },
    generation: {
      type: 'integer',
      description:
        'A positive nonzero number that indicates the current generation of data for this entity; the value is incremented each time the spec changes. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations.',
      examples: [1],
      minimum: 1,
    },
    name: {
      type: 'string',
      description:
        'The name of the entity. Must be unique within the catalog at any given point in time, for any given namespace + kind pair.',
      examples: ['metadata-proxy'],
      minLength: 1,
    },
    namespace: {
      type: 'string',
      description: 'The namespace that the entity belongs to.',
      default: 'default',
      examples: ['default', 'admin'],
      minLength: 1,
    },
    description: {
      type: 'string',
      description:
        'A short (typically relatively few words, on one line) description of the entity.',
    },
    labels: {
      type: 'object',
      description:
        'Key/value pairs of identifying information attached to the entity.',
      additionalProperties: true,
      patternProperties: { '^.+$': { type: 'string' } },
    },
    annotations: {
      type: 'object',
      description:
        'Key/value pairs of non-identifying auxiliary information attached to the entity.',
      additionalProperties: true,
      patternProperties: { '^.+$': { type: 'string' } },
    },
    tags: {
      type: 'array',
      description:
        'A list of single-valued strings, to for example classify catalog entities in various ways.',
      items: { type: 'string', minLength: 1 },
    },
  },
};
const func8 = require('ajv/dist/compile/ucs2length').default;

const pattern0 = new RegExp('^.+$', 'u');
function validate20(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="EntityMeta" */ const vErrors = null;
  const errors = 0;
  if (data && typeof data === 'object' && !Array.isArray(data)) {
    let missing0;
    if (data.name === undefined && (missing0 = 'name')) {
      validate20.errors = [
        {
          keyword: 'required',
          dataPath,
          schemaPath: '#/required',
          params: { missingProperty: missing0 },
          message: `should have required property '${missing0}'`,
        },
      ];
      return false;
    }
    if (data.uid !== undefined) {
      const data0 = data.uid;
      const _errs1 = errors;
      if (typeof data0 === 'string') {
        if (func8(data0) < 1) {
          validate20.errors = [
            {
              keyword: 'minLength',
              dataPath: `${dataPath}/uid`,
              schemaPath: '#/properties/uid/minLength',
              params: { limit: 1 },
              message: 'should NOT have fewer than 1 characters',
            },
          ];
          return false;
        }
      } else {
        validate20.errors = [
          {
            keyword: 'type',
            dataPath: `${dataPath}/uid`,
            schemaPath: '#/properties/uid/type',
            params: { type: 'string' },
            message: 'should be string',
          },
        ];
        return false;
      }
      var valid0 = _errs1 === errors;
    } else {
      var valid0 = true;
    }
    if (valid0) {
      if (data.etag !== undefined) {
        const data1 = data.etag;
        const _errs2 = errors;
        if (typeof data1 === 'string') {
          if (func8(data1) < 1) {
            validate20.errors = [
              {
                keyword: 'minLength',
                dataPath: `${dataPath}/etag`,
                schemaPath: '#/properties/etag/minLength',
                params: { limit: 1 },
                message: 'should NOT have fewer than 1 characters',
              },
            ];
            return false;
          }
        } else {
          validate20.errors = [
            {
              keyword: 'type',
              dataPath: `${dataPath}/etag`,
              schemaPath: '#/properties/etag/type',
              params: { type: 'string' },
              message: 'should be string',
            },
          ];
          return false;
        }
        var valid0 = _errs2 === errors;
      } else {
        var valid0 = true;
      }
      if (valid0) {
        if (data.generation !== undefined) {
          const data2 = data.generation;
          const _errs3 = errors;
          if (
            !(
              typeof data2 === 'number' &&
              !(data2 % 1) &&
              !isNaN(data2) &&
              isFinite(data2)
            )
          ) {
            validate20.errors = [
              {
                keyword: 'type',
                dataPath: `${dataPath}/generation`,
                schemaPath: '#/properties/generation/type',
                params: { type: 'integer' },
                message: 'should be integer',
              },
            ];
            return false;
          }
          if (typeof data2 === 'number' && isFinite(data2)) {
            if (data2 < 1 || isNaN(data2)) {
              validate20.errors = [
                {
                  keyword: 'minimum',
                  dataPath: `${dataPath}/generation`,
                  schemaPath: '#/properties/generation/minimum',
                  params: { comparison: '>=', limit: 1 },
                  message: 'should be >= 1',
                },
              ];
              return false;
            }
          }
          var valid0 = _errs3 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.name !== undefined) {
            const data3 = data.name;
            const _errs4 = errors;
            if (typeof data3 === 'string') {
              if (func8(data3) < 1) {
                validate20.errors = [
                  {
                    keyword: 'minLength',
                    dataPath: `${dataPath}/name`,
                    schemaPath: '#/properties/name/minLength',
                    params: { limit: 1 },
                    message: 'should NOT have fewer than 1 characters',
                  },
                ];
                return false;
              }
            } else {
              validate20.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/name`,
                  schemaPath: '#/properties/name/type',
                  params: { type: 'string' },
                  message: 'should be string',
                },
              ];
              return false;
            }
            var valid0 = _errs4 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.namespace !== undefined) {
              const data4 = data.namespace;
              const _errs5 = errors;
              if (typeof data4 === 'string') {
                if (func8(data4) < 1) {
                  validate20.errors = [
                    {
                      keyword: 'minLength',
                      dataPath: `${dataPath}/namespace`,
                      schemaPath: '#/properties/namespace/minLength',
                      params: { limit: 1 },
                      message: 'should NOT have fewer than 1 characters',
                    },
                  ];
                  return false;
                }
              } else {
                validate20.errors = [
                  {
                    keyword: 'type',
                    dataPath: `${dataPath}/namespace`,
                    schemaPath: '#/properties/namespace/type',
                    params: { type: 'string' },
                    message: 'should be string',
                  },
                ];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.description !== undefined) {
                const _errs6 = errors;
                if (typeof data.description !== 'string') {
                  validate20.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/description`,
                      schemaPath: '#/properties/description/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.labels !== undefined) {
                  const data6 = data.labels;
                  const _errs7 = errors;
                  if (
                    data6 &&
                    typeof data6 === 'object' &&
                    !Array.isArray(data6)
                  ) {
                    var valid1 = true;
                    for (const key0 in data6) {
                      if (pattern0.test(key0)) {
                        const _errs9 = errors;
                        if (typeof data6[key0] !== 'string') {
                          validate20.errors = [
                            {
                              keyword: 'type',
                              dataPath: `${dataPath}/labels/${key0
                                .replace(/~/g, '~0')
                                .replace(/\//g, '~1')}`,
                              schemaPath:
                                '#/properties/labels/patternProperties/%5E.%2B%24/type',
                              params: { type: 'string' },
                              message: 'should be string',
                            },
                          ];
                          return false;
                        }
                        var valid1 = _errs9 === errors;
                        if (!valid1) {
                          break;
                        }
                      }
                    }
                  } else {
                    validate20.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/labels`,
                        schemaPath: '#/properties/labels/type',
                        params: { type: 'object' },
                        message: 'should be object',
                      },
                    ];
                    return false;
                  }
                  var valid0 = _errs7 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.annotations !== undefined) {
                    const data8 = data.annotations;
                    const _errs10 = errors;
                    if (
                      data8 &&
                      typeof data8 === 'object' &&
                      !Array.isArray(data8)
                    ) {
                      var valid2 = true;
                      for (const key1 in data8) {
                        if (pattern0.test(key1)) {
                          const _errs12 = errors;
                          if (typeof data8[key1] !== 'string') {
                            validate20.errors = [
                              {
                                keyword: 'type',
                                dataPath: `${dataPath}/annotations/${key1
                                  .replace(/~/g, '~0')
                                  .replace(/\//g, '~1')}`,
                                schemaPath:
                                  '#/properties/annotations/patternProperties/%5E.%2B%24/type',
                                params: { type: 'string' },
                                message: 'should be string',
                              },
                            ];
                            return false;
                          }
                          var valid2 = _errs12 === errors;
                          if (!valid2) {
                            break;
                          }
                        }
                      }
                    } else {
                      validate20.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/annotations`,
                          schemaPath: '#/properties/annotations/type',
                          params: { type: 'object' },
                          message: 'should be object',
                        },
                      ];
                      return false;
                    }
                    var valid0 = _errs10 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.tags !== undefined) {
                      const data10 = data.tags;
                      const _errs13 = errors;
                      if (Array.isArray(data10)) {
                        const len0 = data10.length;
                        for (let i0 = 0; i0 < len0; i0++) {
                          const data11 = data10[i0];
                          const _errs14 = errors;
                          if (typeof data11 === 'string') {
                            if (func8(data11) < 1) {
                              validate20.errors = [
                                {
                                  keyword: 'minLength',
                                  dataPath: `${dataPath}/tags/${i0}`,
                                  schemaPath:
                                    '#/properties/tags/items/minLength',
                                  params: { limit: 1 },
                                  message:
                                    'should NOT have fewer than 1 characters',
                                },
                              ];
                              return false;
                            }
                          } else {
                            validate20.errors = [
                              {
                                keyword: 'type',
                                dataPath: `${dataPath}/tags/${i0}`,
                                schemaPath: '#/properties/tags/items/type',
                                params: { type: 'string' },
                                message: 'should be string',
                              },
                            ];
                            return false;
                          }
                          const valid3 = _errs14 === errors;
                          if (!valid3) {
                            break;
                          }
                        }
                      } else {
                        validate20.errors = [
                          {
                            keyword: 'type',
                            dataPath: `${dataPath}/tags`,
                            schemaPath: '#/properties/tags/type',
                            params: { type: 'array' },
                            message: 'should be array',
                          },
                        ];
                        return false;
                      }
                      var valid0 = _errs13 === errors;
                    } else {
                      var valid0 = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    validate20.errors = [
      {
        keyword: 'type',
        dataPath,
        schemaPath: '#/type',
        params: { type: 'object' },
        message: 'should be object',
      },
    ];
    return false;
  }
  validate20.errors = vErrors;
  return errors === 0;
}
exports.Entity = validate21;
const schema23 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'Entity',
  description:
    "The format envelope that's common to all versions/kinds of entity.",
  examples: [
    {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Component',
      metadata: {
        name: 'LoremService',
        description: 'Creates Lorems like a pro.',
        labels: { product_name: 'Random value Generator' },
        annotations: { docs: 'https://github.com/..../tree/develop/doc' },
      },
      spec: { type: 'service', lifecycle: 'production', owner: 'tools' },
    },
  ],
  type: 'object',
  required: ['apiVersion', 'kind', 'metadata'],
  additionalProperties: false,
  properties: {
    apiVersion: {
      type: 'string',
      description:
        'The version of specification format for this particular entity that this is written against.',
      minLength: 1,
      examples: ['backstage.io/v1alpha1', 'my-company.net/v1', '1.0'],
    },
    kind: {
      type: 'string',
      description: 'The high level entity type being described.',
      minLength: 1,
      examples: [
        'API',
        'Component',
        'Domain',
        'Group',
        'Location',
        'Resource',
        'System',
        'Template',
        'User',
      ],
    },
    metadata: { $ref: 'EntityMeta' },
    spec: {
      type: 'object',
      description: 'The specification data describing the entity itself.',
    },
    relations: {
      type: 'array',
      description: 'The relations that this entity has with other entities.',
      items: { $ref: 'common#relation' },
    },
  },
};
const schema26 = {
  $id: '#relation',
  type: 'object',
  description: 'A directed relation from one entity to another.',
  required: ['type', 'source', 'target'],
  additionalProperties: false,
  properties: {
    type: {
      type: 'string',
      minLength: 1,
      pattern: '^\\w+$',
      description: 'The type of relation.',
    },
    source: { $ref: '#reference' },
    target: { $ref: '#reference' },
  },
};
const schema27 = {
  $id: '#reference',
  type: 'object',
  description: 'A reference by name to another entity.',
  required: ['kind', 'namespace', 'name'],
  additionalProperties: false,
  properties: {
    kind: { type: 'string', description: 'The kind field of the entity.' },
    namespace: {
      type: 'string',
      description: 'The metadata.namespace field of the entity.',
    },
    name: {
      type: 'string',
      description: 'The metadata.name field of the entity.',
    },
  },
};
const pattern4 = new RegExp('^\\w+$', 'u');
function validate23(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="#relation" */ const vErrors = null;
  const errors = 0;
  if (data && typeof data === 'object' && !Array.isArray(data)) {
    let missing0;
    if (
      (data.type === undefined && (missing0 = 'type')) ||
      (data.source === undefined && (missing0 = 'source')) ||
      (data.target === undefined && (missing0 = 'target'))
    ) {
      validate23.errors = [
        {
          keyword: 'required',
          dataPath,
          schemaPath: '#/required',
          params: { missingProperty: missing0 },
          message: `should have required property '${missing0}'`,
        },
      ];
      return false;
    }
    const _errs0 = errors;
    for (const key0 in data) {
      if (!(key0 === 'type' || key0 === 'source' || key0 === 'target')) {
        validate23.errors = [
          {
            keyword: 'additionalProperties',
            dataPath,
            schemaPath: '#/additionalProperties',
            params: { additionalProperty: key0 },
            message: 'should NOT have additional properties',
          },
        ];
        return false;
        break;
      }
    }
    if (_errs0 === errors) {
      if (data.type !== undefined) {
        const data0 = data.type;
        const _errs1 = errors;
        if (typeof data0 === 'string') {
          if (func8(data0) < 1) {
            validate23.errors = [
              {
                keyword: 'minLength',
                dataPath: `${dataPath}/type`,
                schemaPath: '#/properties/type/minLength',
                params: { limit: 1 },
                message: 'should NOT have fewer than 1 characters',
              },
            ];
            return false;
          }
          if (!pattern4.test(data0)) {
            validate23.errors = [
              {
                keyword: 'pattern',
                dataPath: `${dataPath}/type`,
                schemaPath: '#/properties/type/pattern',
                params: { pattern: '^\\w+$' },
                message: 'should match pattern "' + '^\\w+$' + '"',
              },
            ];
            return false;
          }
        } else {
          validate23.errors = [
            {
              keyword: 'type',
              dataPath: `${dataPath}/type`,
              schemaPath: '#/properties/type/type',
              params: { type: 'string' },
              message: 'should be string',
            },
          ];
          return false;
        }
        var valid0 = _errs1 === errors;
      } else {
        var valid0 = true;
      }
      if (valid0) {
        if (data.source !== undefined) {
          const data1 = data.source;
          const _errs2 = errors;
          if (data1 && typeof data1 === 'object' && !Array.isArray(data1)) {
            let missing1;
            if (
              (data1.kind === undefined && (missing1 = 'kind')) ||
              (data1.namespace === undefined && (missing1 = 'namespace')) ||
              (data1.name === undefined && (missing1 = 'name'))
            ) {
              validate23.errors = [
                {
                  keyword: 'required',
                  dataPath: `${dataPath}/source`,
                  schemaPath: '#reference/required',
                  params: { missingProperty: missing1 },
                  message: `should have required property '${missing1}'`,
                },
              ];
              return false;
            }
            const _errs4 = errors;
            for (const key1 in data1) {
              if (
                !(key1 === 'kind' || key1 === 'namespace' || key1 === 'name')
              ) {
                validate23.errors = [
                  {
                    keyword: 'additionalProperties',
                    dataPath: `${dataPath}/source`,
                    schemaPath: '#reference/additionalProperties',
                    params: { additionalProperty: key1 },
                    message: 'should NOT have additional properties',
                  },
                ];
                return false;
                break;
              }
            }
            if (_errs4 === errors) {
              if (data1.kind !== undefined) {
                const _errs5 = errors;
                if (typeof data1.kind !== 'string') {
                  validate23.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/source/kind`,
                      schemaPath: '#reference/properties/kind/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs5 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data1.namespace !== undefined) {
                  const _errs6 = errors;
                  if (typeof data1.namespace !== 'string') {
                    validate23.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/source/namespace`,
                        schemaPath: '#reference/properties/namespace/type',
                        params: { type: 'string' },
                        message: 'should be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs6 === errors;
                } else {
                  var valid2 = true;
                }
                if (valid2) {
                  if (data1.name !== undefined) {
                    const _errs7 = errors;
                    if (typeof data1.name !== 'string') {
                      validate23.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/source/name`,
                          schemaPath: '#reference/properties/name/type',
                          params: { type: 'string' },
                          message: 'should be string',
                        },
                      ];
                      return false;
                    }
                    var valid2 = _errs7 === errors;
                  } else {
                    var valid2 = true;
                  }
                }
              }
            }
          } else {
            validate23.errors = [
              {
                keyword: 'type',
                dataPath: `${dataPath}/source`,
                schemaPath: '#reference/type',
                params: { type: 'object' },
                message: 'should be object',
              },
            ];
            return false;
          }
          var valid0 = _errs2 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.target !== undefined) {
            const data5 = data.target;
            const _errs8 = errors;
            if (data5 && typeof data5 === 'object' && !Array.isArray(data5)) {
              let missing2;
              if (
                (data5.kind === undefined && (missing2 = 'kind')) ||
                (data5.namespace === undefined && (missing2 = 'namespace')) ||
                (data5.name === undefined && (missing2 = 'name'))
              ) {
                validate23.errors = [
                  {
                    keyword: 'required',
                    dataPath: `${dataPath}/target`,
                    schemaPath: '#reference/required',
                    params: { missingProperty: missing2 },
                    message: `should have required property '${missing2}'`,
                  },
                ];
                return false;
              }
              const _errs10 = errors;
              for (const key2 in data5) {
                if (
                  !(key2 === 'kind' || key2 === 'namespace' || key2 === 'name')
                ) {
                  validate23.errors = [
                    {
                      keyword: 'additionalProperties',
                      dataPath: `${dataPath}/target`,
                      schemaPath: '#reference/additionalProperties',
                      params: { additionalProperty: key2 },
                      message: 'should NOT have additional properties',
                    },
                  ];
                  return false;
                  break;
                }
              }
              if (_errs10 === errors) {
                if (data5.kind !== undefined) {
                  const _errs11 = errors;
                  if (typeof data5.kind !== 'string') {
                    validate23.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/target/kind`,
                        schemaPath: '#reference/properties/kind/type',
                        params: { type: 'string' },
                        message: 'should be string',
                      },
                    ];
                    return false;
                  }
                  var valid4 = _errs11 === errors;
                } else {
                  var valid4 = true;
                }
                if (valid4) {
                  if (data5.namespace !== undefined) {
                    const _errs12 = errors;
                    if (typeof data5.namespace !== 'string') {
                      validate23.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/target/namespace`,
                          schemaPath: '#reference/properties/namespace/type',
                          params: { type: 'string' },
                          message: 'should be string',
                        },
                      ];
                      return false;
                    }
                    var valid4 = _errs12 === errors;
                  } else {
                    var valid4 = true;
                  }
                  if (valid4) {
                    if (data5.name !== undefined) {
                      const _errs13 = errors;
                      if (typeof data5.name !== 'string') {
                        validate23.errors = [
                          {
                            keyword: 'type',
                            dataPath: `${dataPath}/target/name`,
                            schemaPath: '#reference/properties/name/type',
                            params: { type: 'string' },
                            message: 'should be string',
                          },
                        ];
                        return false;
                      }
                      var valid4 = _errs13 === errors;
                    } else {
                      var valid4 = true;
                    }
                  }
                }
              }
            } else {
              validate23.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/target`,
                  schemaPath: '#reference/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid0 = _errs8 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    }
  } else {
    validate23.errors = [
      {
        keyword: 'type',
        dataPath,
        schemaPath: '#/type',
        params: { type: 'object' },
        message: 'should be object',
      },
    ];
    return false;
  }
  validate23.errors = vErrors;
  return errors === 0;
}
function validate21(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="Entity" */ let vErrors = null;
  let errors = 0;
  if (data && typeof data === 'object' && !Array.isArray(data)) {
    let missing0;
    if (
      (data.apiVersion === undefined && (missing0 = 'apiVersion')) ||
      (data.kind === undefined && (missing0 = 'kind')) ||
      (data.metadata === undefined && (missing0 = 'metadata'))
    ) {
      validate21.errors = [
        {
          keyword: 'required',
          dataPath,
          schemaPath: '#/required',
          params: { missingProperty: missing0 },
          message: `should have required property '${missing0}'`,
        },
      ];
      return false;
    }
    const _errs0 = errors;
    for (const key0 in data) {
      if (
        !(
          key0 === 'apiVersion' ||
          key0 === 'kind' ||
          key0 === 'metadata' ||
          key0 === 'spec' ||
          key0 === 'relations'
        )
      ) {
        validate21.errors = [
          {
            keyword: 'additionalProperties',
            dataPath,
            schemaPath: '#/additionalProperties',
            params: { additionalProperty: key0 },
            message: 'should NOT have additional properties',
          },
        ];
        return false;
        break;
      }
    }
    if (_errs0 === errors) {
      if (data.apiVersion !== undefined) {
        const data0 = data.apiVersion;
        const _errs1 = errors;
        if (typeof data0 === 'string') {
          if (func8(data0) < 1) {
            validate21.errors = [
              {
                keyword: 'minLength',
                dataPath: `${dataPath}/apiVersion`,
                schemaPath: '#/properties/apiVersion/minLength',
                params: { limit: 1 },
                message: 'should NOT have fewer than 1 characters',
              },
            ];
            return false;
          }
        } else {
          validate21.errors = [
            {
              keyword: 'type',
              dataPath: `${dataPath}/apiVersion`,
              schemaPath: '#/properties/apiVersion/type',
              params: { type: 'string' },
              message: 'should be string',
            },
          ];
          return false;
        }
        var valid0 = _errs1 === errors;
      } else {
        var valid0 = true;
      }
      if (valid0) {
        if (data.kind !== undefined) {
          const data1 = data.kind;
          const _errs2 = errors;
          if (typeof data1 === 'string') {
            if (func8(data1) < 1) {
              validate21.errors = [
                {
                  keyword: 'minLength',
                  dataPath: `${dataPath}/kind`,
                  schemaPath: '#/properties/kind/minLength',
                  params: { limit: 1 },
                  message: 'should NOT have fewer than 1 characters',
                },
              ];
              return false;
            }
          } else {
            validate21.errors = [
              {
                keyword: 'type',
                dataPath: `${dataPath}/kind`,
                schemaPath: '#/properties/kind/type',
                params: { type: 'string' },
                message: 'should be string',
              },
            ];
            return false;
          }
          var valid0 = _errs2 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.metadata !== undefined) {
            const data2 = data.metadata;
            const _errs3 = errors;
            if (data2 && typeof data2 === 'object' && !Array.isArray(data2)) {
              let missing1;
              if (data2.name === undefined && (missing1 = 'name')) {
                validate21.errors = [
                  {
                    keyword: 'required',
                    dataPath: `${dataPath}/metadata`,
                    schemaPath: 'EntityMeta/required',
                    params: { missingProperty: missing1 },
                    message: `should have required property '${missing1}'`,
                  },
                ];
                return false;
              }
              if (data2.uid !== undefined) {
                const data3 = data2.uid;
                const _errs6 = errors;
                if (typeof data3 === 'string') {
                  if (func8(data3) < 1) {
                    validate21.errors = [
                      {
                        keyword: 'minLength',
                        dataPath: `${dataPath}/metadata/uid`,
                        schemaPath: 'EntityMeta/properties/uid/minLength',
                        params: { limit: 1 },
                        message: 'should NOT have fewer than 1 characters',
                      },
                    ];
                    return false;
                  }
                } else {
                  validate21.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/metadata/uid`,
                      schemaPath: 'EntityMeta/properties/uid/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs6 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data2.etag !== undefined) {
                  const data4 = data2.etag;
                  const _errs7 = errors;
                  if (typeof data4 === 'string') {
                    if (func8(data4) < 1) {
                      validate21.errors = [
                        {
                          keyword: 'minLength',
                          dataPath: `${dataPath}/metadata/etag`,
                          schemaPath: 'EntityMeta/properties/etag/minLength',
                          params: { limit: 1 },
                          message: 'should NOT have fewer than 1 characters',
                        },
                      ];
                      return false;
                    }
                  } else {
                    validate21.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/metadata/etag`,
                        schemaPath: 'EntityMeta/properties/etag/type',
                        params: { type: 'string' },
                        message: 'should be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs7 === errors;
                } else {
                  var valid2 = true;
                }
                if (valid2) {
                  if (data2.generation !== undefined) {
                    const data5 = data2.generation;
                    const _errs8 = errors;
                    if (
                      !(
                        typeof data5 === 'number' &&
                        !(data5 % 1) &&
                        !isNaN(data5) &&
                        isFinite(data5)
                      )
                    ) {
                      validate21.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/metadata/generation`,
                          schemaPath: 'EntityMeta/properties/generation/type',
                          params: { type: 'integer' },
                          message: 'should be integer',
                        },
                      ];
                      return false;
                    }
                    if (typeof data5 === 'number' && isFinite(data5)) {
                      if (data5 < 1 || isNaN(data5)) {
                        validate21.errors = [
                          {
                            keyword: 'minimum',
                            dataPath: `${dataPath}/metadata/generation`,
                            schemaPath:
                              'EntityMeta/properties/generation/minimum',
                            params: { comparison: '>=', limit: 1 },
                            message: 'should be >= 1',
                          },
                        ];
                        return false;
                      }
                    }
                    var valid2 = _errs8 === errors;
                  } else {
                    var valid2 = true;
                  }
                  if (valid2) {
                    if (data2.name !== undefined) {
                      const data6 = data2.name;
                      const _errs9 = errors;
                      if (typeof data6 === 'string') {
                        if (func8(data6) < 1) {
                          validate21.errors = [
                            {
                              keyword: 'minLength',
                              dataPath: `${dataPath}/metadata/name`,
                              schemaPath:
                                'EntityMeta/properties/name/minLength',
                              params: { limit: 1 },
                              message:
                                'should NOT have fewer than 1 characters',
                            },
                          ];
                          return false;
                        }
                      } else {
                        validate21.errors = [
                          {
                            keyword: 'type',
                            dataPath: `${dataPath}/metadata/name`,
                            schemaPath: 'EntityMeta/properties/name/type',
                            params: { type: 'string' },
                            message: 'should be string',
                          },
                        ];
                        return false;
                      }
                      var valid2 = _errs9 === errors;
                    } else {
                      var valid2 = true;
                    }
                    if (valid2) {
                      if (data2.namespace !== undefined) {
                        const data7 = data2.namespace;
                        const _errs10 = errors;
                        if (typeof data7 === 'string') {
                          if (func8(data7) < 1) {
                            validate21.errors = [
                              {
                                keyword: 'minLength',
                                dataPath: `${dataPath}/metadata/namespace`,
                                schemaPath:
                                  'EntityMeta/properties/namespace/minLength',
                                params: { limit: 1 },
                                message:
                                  'should NOT have fewer than 1 characters',
                              },
                            ];
                            return false;
                          }
                        } else {
                          validate21.errors = [
                            {
                              keyword: 'type',
                              dataPath: `${dataPath}/metadata/namespace`,
                              schemaPath:
                                'EntityMeta/properties/namespace/type',
                              params: { type: 'string' },
                              message: 'should be string',
                            },
                          ];
                          return false;
                        }
                        var valid2 = _errs10 === errors;
                      } else {
                        var valid2 = true;
                      }
                      if (valid2) {
                        if (data2.description !== undefined) {
                          const _errs11 = errors;
                          if (typeof data2.description !== 'string') {
                            validate21.errors = [
                              {
                                keyword: 'type',
                                dataPath: `${dataPath}/metadata/description`,
                                schemaPath:
                                  'EntityMeta/properties/description/type',
                                params: { type: 'string' },
                                message: 'should be string',
                              },
                            ];
                            return false;
                          }
                          var valid2 = _errs11 === errors;
                        } else {
                          var valid2 = true;
                        }
                        if (valid2) {
                          if (data2.labels !== undefined) {
                            const data9 = data2.labels;
                            const _errs12 = errors;
                            if (
                              data9 &&
                              typeof data9 === 'object' &&
                              !Array.isArray(data9)
                            ) {
                              var valid3 = true;
                              for (const key1 in data9) {
                                if (pattern0.test(key1)) {
                                  const _errs14 = errors;
                                  if (typeof data9[key1] !== 'string') {
                                    validate21.errors = [
                                      {
                                        keyword: 'type',
                                        dataPath: `${dataPath}/metadata/labels/${key1
                                          .replace(/~/g, '~0')
                                          .replace(/\//g, '~1')}`,
                                        schemaPath:
                                          'EntityMeta/properties/labels/patternProperties/%5E.%2B%24/type',
                                        params: { type: 'string' },
                                        message: 'should be string',
                                      },
                                    ];
                                    return false;
                                  }
                                  var valid3 = _errs14 === errors;
                                  if (!valid3) {
                                    break;
                                  }
                                }
                              }
                            } else {
                              validate21.errors = [
                                {
                                  keyword: 'type',
                                  dataPath: `${dataPath}/metadata/labels`,
                                  schemaPath:
                                    'EntityMeta/properties/labels/type',
                                  params: { type: 'object' },
                                  message: 'should be object',
                                },
                              ];
                              return false;
                            }
                            var valid2 = _errs12 === errors;
                          } else {
                            var valid2 = true;
                          }
                          if (valid2) {
                            if (data2.annotations !== undefined) {
                              const data11 = data2.annotations;
                              const _errs15 = errors;
                              if (
                                data11 &&
                                typeof data11 === 'object' &&
                                !Array.isArray(data11)
                              ) {
                                var valid4 = true;
                                for (const key2 in data11) {
                                  if (pattern0.test(key2)) {
                                    const _errs17 = errors;
                                    if (typeof data11[key2] !== 'string') {
                                      validate21.errors = [
                                        {
                                          keyword: 'type',
                                          dataPath: `${dataPath}/metadata/annotations/${key2
                                            .replace(/~/g, '~0')
                                            .replace(/\//g, '~1')}`,
                                          schemaPath:
                                            'EntityMeta/properties/annotations/patternProperties/%5E.%2B%24/type',
                                          params: { type: 'string' },
                                          message: 'should be string',
                                        },
                                      ];
                                      return false;
                                    }
                                    var valid4 = _errs17 === errors;
                                    if (!valid4) {
                                      break;
                                    }
                                  }
                                }
                              } else {
                                validate21.errors = [
                                  {
                                    keyword: 'type',
                                    dataPath: `${dataPath}/metadata/annotations`,
                                    schemaPath:
                                      'EntityMeta/properties/annotations/type',
                                    params: { type: 'object' },
                                    message: 'should be object',
                                  },
                                ];
                                return false;
                              }
                              var valid2 = _errs15 === errors;
                            } else {
                              var valid2 = true;
                            }
                            if (valid2) {
                              if (data2.tags !== undefined) {
                                const data13 = data2.tags;
                                const _errs18 = errors;
                                if (Array.isArray(data13)) {
                                  const len0 = data13.length;
                                  for (let i0 = 0; i0 < len0; i0++) {
                                    const data14 = data13[i0];
                                    const _errs19 = errors;
                                    if (typeof data14 === 'string') {
                                      if (func8(data14) < 1) {
                                        validate21.errors = [
                                          {
                                            keyword: 'minLength',
                                            dataPath: `${dataPath}/metadata/tags/${i0}`,
                                            schemaPath:
                                              'EntityMeta/properties/tags/items/minLength',
                                            params: { limit: 1 },
                                            message:
                                              'should NOT have fewer than 1 characters',
                                          },
                                        ];
                                        return false;
                                      }
                                    } else {
                                      validate21.errors = [
                                        {
                                          keyword: 'type',
                                          dataPath: `${dataPath}/metadata/tags/${i0}`,
                                          schemaPath:
                                            'EntityMeta/properties/tags/items/type',
                                          params: { type: 'string' },
                                          message: 'should be string',
                                        },
                                      ];
                                      return false;
                                    }
                                    const valid5 = _errs19 === errors;
                                    if (!valid5) {
                                      break;
                                    }
                                  }
                                } else {
                                  validate21.errors = [
                                    {
                                      keyword: 'type',
                                      dataPath: `${dataPath}/metadata/tags`,
                                      schemaPath:
                                        'EntityMeta/properties/tags/type',
                                      params: { type: 'array' },
                                      message: 'should be array',
                                    },
                                  ];
                                  return false;
                                }
                                var valid2 = _errs18 === errors;
                              } else {
                                var valid2 = true;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              validate21.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/metadata`,
                  schemaPath: 'EntityMeta/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.spec !== undefined) {
              const data15 = data.spec;
              const _errs20 = errors;
              if (
                !(
                  data15 &&
                  typeof data15 === 'object' &&
                  !Array.isArray(data15)
                )
              ) {
                validate21.errors = [
                  {
                    keyword: 'type',
                    dataPath: `${dataPath}/spec`,
                    schemaPath: '#/properties/spec/type',
                    params: { type: 'object' },
                    message: 'should be object',
                  },
                ];
                return false;
              }
              var valid0 = _errs20 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.relations !== undefined) {
                const data16 = data.relations;
                const _errs21 = errors;
                if (Array.isArray(data16)) {
                  const len1 = data16.length;
                  for (let i1 = 0; i1 < len1; i1++) {
                    const _errs22 = errors;
                    if (
                      !validate23(data16[i1], {
                        dataPath: `${dataPath}/relations/${i1}`,
                        parentData: data16,
                        parentDataProperty: i1,
                        rootData,
                      })
                    ) {
                      vErrors =
                        vErrors === null
                          ? validate23.errors
                          : vErrors.concat(validate23.errors);
                      errors = vErrors.length;
                    }
                    const valid6 = _errs22 === errors;
                    if (!valid6) {
                      break;
                    }
                  }
                } else {
                  validate21.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/relations`,
                      schemaPath: '#/properties/relations/type',
                      params: { type: 'array' },
                      message: 'should be array',
                    },
                  ];
                  return false;
                }
                var valid0 = _errs21 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    }
  } else {
    validate21.errors = [
      {
        keyword: 'type',
        dataPath,
        schemaPath: '#/type',
        params: { type: 'object' },
        message: 'should be object',
      },
    ];
    return false;
  }
  validate21.errors = vErrors;
  return errors === 0;
}
exports.ApiV1alpha1 = validate25;
const schema29 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'ApiV1alpha1',
  description:
    'An API describes an interface that can be exposed by a component. The API can be defined in different formats, like OpenAPI, AsyncAPI, GraphQL, gRPC, or other formats.',
  examples: [
    {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'API',
      metadata: {
        name: 'artist-api',
        description: 'Retrieve artist details',
        labels: { product_name: 'Random value Generator' },
        annotations: { docs: 'https://github.com/..../tree/develop/doc' },
      },
      spec: {
        type: 'openapi',
        lifecycle: 'production',
        owner: 'artist-relations-team',
        system: 'artist-engagement-portal',
        definition: 'openapi: "3.0.0"\ninfo:...',
      },
    },
  ],
  allOf: [
    { $ref: 'Entity' },
    {
      type: 'object',
      required: ['spec'],
      properties: {
        apiVersion: { enum: ['backstage.io/v1alpha1', 'backstage.io/v1beta1'] },
        kind: { enum: ['API'] },
        spec: {
          type: 'object',
          required: ['type', 'lifecycle', 'owner', 'definition'],
          properties: {
            type: {
              type: 'string',
              description: 'The type of the API definition.',
              examples: ['openapi', 'asyncapi', 'graphql', 'grpc'],
              minLength: 1,
            },
            lifecycle: {
              type: 'string',
              description: 'The lifecycle state of the API.',
              examples: ['experimental', 'production', 'deprecated'],
              minLength: 1,
            },
            owner: {
              type: 'string',
              description: 'An entity reference to the owner of the API.',
              examples: ['artist-relations-team', 'user:john.johnson'],
              minLength: 1,
            },
            system: {
              type: 'string',
              description:
                'An entity reference to the system that the API belongs to.',
              minLength: 1,
            },
            definition: {
              type: 'string',
              description:
                'The definition of the API, based on the format defined by the type.',
              minLength: 1,
            },
          },
        },
      },
    },
  ],
};
const func0 = require('ajv/dist/compile/equal');

function validate25(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="ApiV1alpha1" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (
    !validate21(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.spec === undefined && (missing0 = 'spec')) {
        validate25.errors = [
          {
            keyword: 'required',
            dataPath,
            schemaPath: '#/allOf/1/required',
            params: { missingProperty: missing0 },
            message: `should have required property '${missing0}'`,
          },
        ];
        return false;
      }
      if (data.apiVersion !== undefined) {
        const data0 = data.apiVersion;
        const _errs2 = errors;
        if (
          !(
            data0 === 'backstage.io/v1alpha1' ||
            data0 === 'backstage.io/v1beta1'
          )
        ) {
          validate25.errors = [
            {
              keyword: 'enum',
              dataPath: `${dataPath}/apiVersion`,
              schemaPath: '#/allOf/1/properties/apiVersion/enum',
              params: {
                allowedValues: schema29.allOf[1].properties.apiVersion.enum,
              },
              message: 'should be equal to one of the allowed values',
            },
          ];
          return false;
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.kind !== undefined) {
          const _errs3 = errors;
          if (!(data.kind === 'API')) {
            validate25.errors = [
              {
                keyword: 'enum',
                dataPath: `${dataPath}/kind`,
                schemaPath: '#/allOf/1/properties/kind/enum',
                params: {
                  allowedValues: schema29.allOf[1].properties.kind.enum,
                },
                message: 'should be equal to one of the allowed values',
              },
            ];
            return false;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.spec !== undefined) {
            const data2 = data.spec;
            const _errs4 = errors;
            if (data2 && typeof data2 === 'object' && !Array.isArray(data2)) {
              let missing1;
              if (
                (data2.type === undefined && (missing1 = 'type')) ||
                (data2.lifecycle === undefined && (missing1 = 'lifecycle')) ||
                (data2.owner === undefined && (missing1 = 'owner')) ||
                (data2.definition === undefined && (missing1 = 'definition'))
              ) {
                validate25.errors = [
                  {
                    keyword: 'required',
                    dataPath: `${dataPath}/spec`,
                    schemaPath: '#/allOf/1/properties/spec/required',
                    params: { missingProperty: missing1 },
                    message: `should have required property '${missing1}'`,
                  },
                ];
                return false;
              }
              if (data2.type !== undefined) {
                const data3 = data2.type;
                const _errs5 = errors;
                if (typeof data3 === 'string') {
                  if (func8(data3) < 1) {
                    validate25.errors = [
                      {
                        keyword: 'minLength',
                        dataPath: `${dataPath}/spec/type`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/type/minLength',
                        params: { limit: 1 },
                        message: 'should NOT have fewer than 1 characters',
                      },
                    ];
                    return false;
                  }
                } else {
                  validate25.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/spec/type`,
                      schemaPath:
                        '#/allOf/1/properties/spec/properties/type/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs5 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data2.lifecycle !== undefined) {
                  const data4 = data2.lifecycle;
                  const _errs6 = errors;
                  if (typeof data4 === 'string') {
                    if (func8(data4) < 1) {
                      validate25.errors = [
                        {
                          keyword: 'minLength',
                          dataPath: `${dataPath}/spec/lifecycle`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/lifecycle/minLength',
                          params: { limit: 1 },
                          message: 'should NOT have fewer than 1 characters',
                        },
                      ];
                      return false;
                    }
                  } else {
                    validate25.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/spec/lifecycle`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/lifecycle/type',
                        params: { type: 'string' },
                        message: 'should be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs6 === errors;
                } else {
                  var valid2 = true;
                }
                if (valid2) {
                  if (data2.owner !== undefined) {
                    const data5 = data2.owner;
                    const _errs7 = errors;
                    if (typeof data5 === 'string') {
                      if (func8(data5) < 1) {
                        validate25.errors = [
                          {
                            keyword: 'minLength',
                            dataPath: `${dataPath}/spec/owner`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/owner/minLength',
                            params: { limit: 1 },
                            message: 'should NOT have fewer than 1 characters',
                          },
                        ];
                        return false;
                      }
                    } else {
                      validate25.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/spec/owner`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/owner/type',
                          params: { type: 'string' },
                          message: 'should be string',
                        },
                      ];
                      return false;
                    }
                    var valid2 = _errs7 === errors;
                  } else {
                    var valid2 = true;
                  }
                  if (valid2) {
                    if (data2.system !== undefined) {
                      const data6 = data2.system;
                      const _errs8 = errors;
                      if (typeof data6 === 'string') {
                        if (func8(data6) < 1) {
                          validate25.errors = [
                            {
                              keyword: 'minLength',
                              dataPath: `${dataPath}/spec/system`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/system/minLength',
                              params: { limit: 1 },
                              message:
                                'should NOT have fewer than 1 characters',
                            },
                          ];
                          return false;
                        }
                      } else {
                        validate25.errors = [
                          {
                            keyword: 'type',
                            dataPath: `${dataPath}/spec/system`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/system/type',
                            params: { type: 'string' },
                            message: 'should be string',
                          },
                        ];
                        return false;
                      }
                      var valid2 = _errs8 === errors;
                    } else {
                      var valid2 = true;
                    }
                    if (valid2) {
                      if (data2.definition !== undefined) {
                        const data7 = data2.definition;
                        const _errs9 = errors;
                        if (typeof data7 === 'string') {
                          if (func8(data7) < 1) {
                            validate25.errors = [
                              {
                                keyword: 'minLength',
                                dataPath: `${dataPath}/spec/definition`,
                                schemaPath:
                                  '#/allOf/1/properties/spec/properties/definition/minLength',
                                params: { limit: 1 },
                                message:
                                  'should NOT have fewer than 1 characters',
                              },
                            ];
                            return false;
                          }
                        } else {
                          validate25.errors = [
                            {
                              keyword: 'type',
                              dataPath: `${dataPath}/spec/definition`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/definition/type',
                              params: { type: 'string' },
                              message: 'should be string',
                            },
                          ];
                          return false;
                        }
                        var valid2 = _errs9 === errors;
                      } else {
                        var valid2 = true;
                      }
                    }
                  }
                }
              }
            } else {
              validate25.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/spec`,
                  schemaPath: '#/allOf/1/properties/spec/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate25.errors = [
        {
          keyword: 'type',
          dataPath,
          schemaPath: '#/allOf/1/type',
          params: { type: 'object' },
          message: 'should be object',
        },
      ];
      return false;
    }
    var valid0 = _errs1 === errors;
  }
  validate25.errors = vErrors;
  return errors === 0;
}
exports.ComponentV1alpha1 = validate27;
const schema30 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'ComponentV1alpha1',
  description:
    'A Component describes a software component. It is typically intimately linked to the source code that constitutes the component, and should be what a developer may regard a "unit of software", usually with a distinct deployable or linkable artifact.',
  examples: [
    {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Component',
      metadata: {
        name: 'LoremService',
        description: 'Creates Lorems like a pro.',
        labels: { product_name: 'Random value Generator' },
        annotations: { docs: 'https://github.com/..../tree/develop/doc' },
      },
      spec: { type: 'service', lifecycle: 'production', owner: 'tools' },
    },
  ],
  allOf: [
    { $ref: 'Entity' },
    {
      type: 'object',
      required: ['spec'],
      properties: {
        apiVersion: { enum: ['backstage.io/v1alpha1', 'backstage.io/v1beta1'] },
        kind: { enum: ['Component'] },
        spec: {
          type: 'object',
          required: ['type', 'lifecycle', 'owner'],
          properties: {
            type: {
              type: 'string',
              description: 'The type of component.',
              examples: ['service', 'website', 'library'],
              minLength: 1,
            },
            lifecycle: {
              type: 'string',
              description: 'The lifecycle state of the component.',
              examples: ['experimental', 'production', 'deprecated'],
              minLength: 1,
            },
            owner: {
              type: 'string',
              description: 'An entity reference to the owner of the component.',
              examples: ['artist-relations-team', 'user:john.johnson'],
              minLength: 1,
            },
            system: {
              type: 'string',
              description:
                'An entity reference to the system that the component belongs to.',
              minLength: 1,
            },
            subcomponentOf: {
              type: 'string',
              description:
                'An entity reference to another component of which the component is a part.',
              minLength: 1,
            },
            providesApis: {
              type: 'array',
              description:
                'An array of entity references to the APIs that are provided by the component.',
              items: { type: 'string', minLength: 1 },
            },
            consumesApis: {
              type: 'array',
              description:
                'An array of entity references to the APIs that are consumed by the component.',
              items: { type: 'string', minLength: 1 },
            },
          },
        },
      },
    },
  ],
};
function validate27(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="ComponentV1alpha1" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (
    !validate21(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.spec === undefined && (missing0 = 'spec')) {
        validate27.errors = [
          {
            keyword: 'required',
            dataPath,
            schemaPath: '#/allOf/1/required',
            params: { missingProperty: missing0 },
            message: `should have required property '${missing0}'`,
          },
        ];
        return false;
      }
      if (data.apiVersion !== undefined) {
        const data0 = data.apiVersion;
        const _errs2 = errors;
        if (
          !(
            data0 === 'backstage.io/v1alpha1' ||
            data0 === 'backstage.io/v1beta1'
          )
        ) {
          validate27.errors = [
            {
              keyword: 'enum',
              dataPath: `${dataPath}/apiVersion`,
              schemaPath: '#/allOf/1/properties/apiVersion/enum',
              params: {
                allowedValues: schema30.allOf[1].properties.apiVersion.enum,
              },
              message: 'should be equal to one of the allowed values',
            },
          ];
          return false;
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.kind !== undefined) {
          const _errs3 = errors;
          if (!(data.kind === 'Component')) {
            validate27.errors = [
              {
                keyword: 'enum',
                dataPath: `${dataPath}/kind`,
                schemaPath: '#/allOf/1/properties/kind/enum',
                params: {
                  allowedValues: schema30.allOf[1].properties.kind.enum,
                },
                message: 'should be equal to one of the allowed values',
              },
            ];
            return false;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.spec !== undefined) {
            const data2 = data.spec;
            const _errs4 = errors;
            if (data2 && typeof data2 === 'object' && !Array.isArray(data2)) {
              let missing1;
              if (
                (data2.type === undefined && (missing1 = 'type')) ||
                (data2.lifecycle === undefined && (missing1 = 'lifecycle')) ||
                (data2.owner === undefined && (missing1 = 'owner'))
              ) {
                validate27.errors = [
                  {
                    keyword: 'required',
                    dataPath: `${dataPath}/spec`,
                    schemaPath: '#/allOf/1/properties/spec/required',
                    params: { missingProperty: missing1 },
                    message: `should have required property '${missing1}'`,
                  },
                ];
                return false;
              }
              if (data2.type !== undefined) {
                const data3 = data2.type;
                const _errs5 = errors;
                if (typeof data3 === 'string') {
                  if (func8(data3) < 1) {
                    validate27.errors = [
                      {
                        keyword: 'minLength',
                        dataPath: `${dataPath}/spec/type`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/type/minLength',
                        params: { limit: 1 },
                        message: 'should NOT have fewer than 1 characters',
                      },
                    ];
                    return false;
                  }
                } else {
                  validate27.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/spec/type`,
                      schemaPath:
                        '#/allOf/1/properties/spec/properties/type/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs5 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data2.lifecycle !== undefined) {
                  const data4 = data2.lifecycle;
                  const _errs6 = errors;
                  if (typeof data4 === 'string') {
                    if (func8(data4) < 1) {
                      validate27.errors = [
                        {
                          keyword: 'minLength',
                          dataPath: `${dataPath}/spec/lifecycle`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/lifecycle/minLength',
                          params: { limit: 1 },
                          message: 'should NOT have fewer than 1 characters',
                        },
                      ];
                      return false;
                    }
                  } else {
                    validate27.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/spec/lifecycle`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/lifecycle/type',
                        params: { type: 'string' },
                        message: 'should be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs6 === errors;
                } else {
                  var valid2 = true;
                }
                if (valid2) {
                  if (data2.owner !== undefined) {
                    const data5 = data2.owner;
                    const _errs7 = errors;
                    if (typeof data5 === 'string') {
                      if (func8(data5) < 1) {
                        validate27.errors = [
                          {
                            keyword: 'minLength',
                            dataPath: `${dataPath}/spec/owner`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/owner/minLength',
                            params: { limit: 1 },
                            message: 'should NOT have fewer than 1 characters',
                          },
                        ];
                        return false;
                      }
                    } else {
                      validate27.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/spec/owner`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/owner/type',
                          params: { type: 'string' },
                          message: 'should be string',
                        },
                      ];
                      return false;
                    }
                    var valid2 = _errs7 === errors;
                  } else {
                    var valid2 = true;
                  }
                  if (valid2) {
                    if (data2.system !== undefined) {
                      const data6 = data2.system;
                      const _errs8 = errors;
                      if (typeof data6 === 'string') {
                        if (func8(data6) < 1) {
                          validate27.errors = [
                            {
                              keyword: 'minLength',
                              dataPath: `${dataPath}/spec/system`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/system/minLength',
                              params: { limit: 1 },
                              message:
                                'should NOT have fewer than 1 characters',
                            },
                          ];
                          return false;
                        }
                      } else {
                        validate27.errors = [
                          {
                            keyword: 'type',
                            dataPath: `${dataPath}/spec/system`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/system/type',
                            params: { type: 'string' },
                            message: 'should be string',
                          },
                        ];
                        return false;
                      }
                      var valid2 = _errs8 === errors;
                    } else {
                      var valid2 = true;
                    }
                    if (valid2) {
                      if (data2.subcomponentOf !== undefined) {
                        const data7 = data2.subcomponentOf;
                        const _errs9 = errors;
                        if (typeof data7 === 'string') {
                          if (func8(data7) < 1) {
                            validate27.errors = [
                              {
                                keyword: 'minLength',
                                dataPath: `${dataPath}/spec/subcomponentOf`,
                                schemaPath:
                                  '#/allOf/1/properties/spec/properties/subcomponentOf/minLength',
                                params: { limit: 1 },
                                message:
                                  'should NOT have fewer than 1 characters',
                              },
                            ];
                            return false;
                          }
                        } else {
                          validate27.errors = [
                            {
                              keyword: 'type',
                              dataPath: `${dataPath}/spec/subcomponentOf`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/subcomponentOf/type',
                              params: { type: 'string' },
                              message: 'should be string',
                            },
                          ];
                          return false;
                        }
                        var valid2 = _errs9 === errors;
                      } else {
                        var valid2 = true;
                      }
                      if (valid2) {
                        if (data2.providesApis !== undefined) {
                          const data8 = data2.providesApis;
                          const _errs10 = errors;
                          if (Array.isArray(data8)) {
                            const len0 = data8.length;
                            for (let i0 = 0; i0 < len0; i0++) {
                              const data9 = data8[i0];
                              const _errs11 = errors;
                              if (typeof data9 === 'string') {
                                if (func8(data9) < 1) {
                                  validate27.errors = [
                                    {
                                      keyword: 'minLength',
                                      dataPath: `${dataPath}/spec/providesApis/${i0}`,
                                      schemaPath:
                                        '#/allOf/1/properties/spec/properties/providesApis/items/minLength',
                                      params: { limit: 1 },
                                      message:
                                        'should NOT have fewer than 1 characters',
                                    },
                                  ];
                                  return false;
                                }
                              } else {
                                validate27.errors = [
                                  {
                                    keyword: 'type',
                                    dataPath: `${dataPath}/spec/providesApis/${i0}`,
                                    schemaPath:
                                      '#/allOf/1/properties/spec/properties/providesApis/items/type',
                                    params: { type: 'string' },
                                    message: 'should be string',
                                  },
                                ];
                                return false;
                              }
                              const valid3 = _errs11 === errors;
                              if (!valid3) {
                                break;
                              }
                            }
                          } else {
                            validate27.errors = [
                              {
                                keyword: 'type',
                                dataPath: `${dataPath}/spec/providesApis`,
                                schemaPath:
                                  '#/allOf/1/properties/spec/properties/providesApis/type',
                                params: { type: 'array' },
                                message: 'should be array',
                              },
                            ];
                            return false;
                          }
                          var valid2 = _errs10 === errors;
                        } else {
                          var valid2 = true;
                        }
                        if (valid2) {
                          if (data2.consumesApis !== undefined) {
                            const data10 = data2.consumesApis;
                            const _errs12 = errors;
                            if (Array.isArray(data10)) {
                              const len1 = data10.length;
                              for (let i1 = 0; i1 < len1; i1++) {
                                const data11 = data10[i1];
                                const _errs13 = errors;
                                if (typeof data11 === 'string') {
                                  if (func8(data11) < 1) {
                                    validate27.errors = [
                                      {
                                        keyword: 'minLength',
                                        dataPath: `${dataPath}/spec/consumesApis/${i1}`,
                                        schemaPath:
                                          '#/allOf/1/properties/spec/properties/consumesApis/items/minLength',
                                        params: { limit: 1 },
                                        message:
                                          'should NOT have fewer than 1 characters',
                                      },
                                    ];
                                    return false;
                                  }
                                } else {
                                  validate27.errors = [
                                    {
                                      keyword: 'type',
                                      dataPath: `${dataPath}/spec/consumesApis/${i1}`,
                                      schemaPath:
                                        '#/allOf/1/properties/spec/properties/consumesApis/items/type',
                                      params: { type: 'string' },
                                      message: 'should be string',
                                    },
                                  ];
                                  return false;
                                }
                                const valid4 = _errs13 === errors;
                                if (!valid4) {
                                  break;
                                }
                              }
                            } else {
                              validate27.errors = [
                                {
                                  keyword: 'type',
                                  dataPath: `${dataPath}/spec/consumesApis`,
                                  schemaPath:
                                    '#/allOf/1/properties/spec/properties/consumesApis/type',
                                  params: { type: 'array' },
                                  message: 'should be array',
                                },
                              ];
                              return false;
                            }
                            var valid2 = _errs12 === errors;
                          } else {
                            var valid2 = true;
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              validate27.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/spec`,
                  schemaPath: '#/allOf/1/properties/spec/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate27.errors = [
        {
          keyword: 'type',
          dataPath,
          schemaPath: '#/allOf/1/type',
          params: { type: 'object' },
          message: 'should be object',
        },
      ];
      return false;
    }
    var valid0 = _errs1 === errors;
  }
  validate27.errors = vErrors;
  return errors === 0;
}
exports.DomainV1alpha1 = validate29;
const schema31 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'DomainV1alpha1',
  description:
    'A Domain groups a collection of systems that share terminology, domain models, business purpose, or documentation, i.e. form a bounded context.',
  examples: [
    {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Domain',
      metadata: { name: 'artists', description: 'Everything about artists' },
      spec: { owner: 'artist-relations-team' },
    },
  ],
  allOf: [
    { $ref: 'Entity' },
    {
      type: 'object',
      required: ['spec'],
      properties: {
        apiVersion: { enum: ['backstage.io/v1alpha1', 'backstage.io/v1beta1'] },
        kind: { enum: ['Domain'] },
        spec: {
          type: 'object',
          required: ['owner'],
          properties: {
            owner: {
              type: 'string',
              description: 'An entity reference to the owner of the component.',
              examples: ['artist-relations-team', 'user:john.johnson'],
              minLength: 1,
            },
          },
        },
      },
    },
  ],
};
function validate29(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="DomainV1alpha1" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (
    !validate21(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.spec === undefined && (missing0 = 'spec')) {
        validate29.errors = [
          {
            keyword: 'required',
            dataPath,
            schemaPath: '#/allOf/1/required',
            params: { missingProperty: missing0 },
            message: `should have required property '${missing0}'`,
          },
        ];
        return false;
      }
      if (data.apiVersion !== undefined) {
        const data0 = data.apiVersion;
        const _errs2 = errors;
        if (
          !(
            data0 === 'backstage.io/v1alpha1' ||
            data0 === 'backstage.io/v1beta1'
          )
        ) {
          validate29.errors = [
            {
              keyword: 'enum',
              dataPath: `${dataPath}/apiVersion`,
              schemaPath: '#/allOf/1/properties/apiVersion/enum',
              params: {
                allowedValues: schema31.allOf[1].properties.apiVersion.enum,
              },
              message: 'should be equal to one of the allowed values',
            },
          ];
          return false;
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.kind !== undefined) {
          const _errs3 = errors;
          if (!(data.kind === 'Domain')) {
            validate29.errors = [
              {
                keyword: 'enum',
                dataPath: `${dataPath}/kind`,
                schemaPath: '#/allOf/1/properties/kind/enum',
                params: {
                  allowedValues: schema31.allOf[1].properties.kind.enum,
                },
                message: 'should be equal to one of the allowed values',
              },
            ];
            return false;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.spec !== undefined) {
            const data2 = data.spec;
            const _errs4 = errors;
            if (data2 && typeof data2 === 'object' && !Array.isArray(data2)) {
              let missing1;
              if (data2.owner === undefined && (missing1 = 'owner')) {
                validate29.errors = [
                  {
                    keyword: 'required',
                    dataPath: `${dataPath}/spec`,
                    schemaPath: '#/allOf/1/properties/spec/required',
                    params: { missingProperty: missing1 },
                    message: `should have required property '${missing1}'`,
                  },
                ];
                return false;
              }
              if (data2.owner !== undefined) {
                const data3 = data2.owner;
                if (typeof data3 === 'string') {
                  if (func8(data3) < 1) {
                    validate29.errors = [
                      {
                        keyword: 'minLength',
                        dataPath: `${dataPath}/spec/owner`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/owner/minLength',
                        params: { limit: 1 },
                        message: 'should NOT have fewer than 1 characters',
                      },
                    ];
                    return false;
                  }
                } else {
                  validate29.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/spec/owner`,
                      schemaPath:
                        '#/allOf/1/properties/spec/properties/owner/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
              }
            } else {
              validate29.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/spec`,
                  schemaPath: '#/allOf/1/properties/spec/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate29.errors = [
        {
          keyword: 'type',
          dataPath,
          schemaPath: '#/allOf/1/type',
          params: { type: 'object' },
          message: 'should be object',
        },
      ];
      return false;
    }
    var valid0 = _errs1 === errors;
  }
  validate29.errors = vErrors;
  return errors === 0;
}
exports.GroupV1alpha1 = validate31;
const schema32 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'GroupV1alpha1',
  description:
    'A group describes an organizational entity, such as for example a team, a business unit, or a loose collection of people in an interest group. Members of these groups are modeled in the catalog as kind User.',
  examples: [
    {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Group',
      metadata: {
        name: 'infrastructure',
        description: 'The infra business unit',
      },
      spec: {
        type: 'business-unit',
        profile: {
          displayName: 'Infrastructure',
          email: 'infrastructure@example.com',
          picture: 'https://example.com/groups/bu-infrastructure.jpeg',
        },
        parent: 'ops',
        children: ['backstage', 'other'],
      },
    },
  ],
  allOf: [
    { $ref: 'Entity' },
    {
      type: 'object',
      required: ['spec'],
      properties: {
        apiVersion: { enum: ['backstage.io/v1alpha1', 'backstage.io/v1beta1'] },
        kind: { enum: ['Group'] },
        spec: {
          type: 'object',
          required: ['type', 'children'],
          properties: {
            type: {
              type: 'string',
              description:
                'The type of group. There is currently no enforced set of values for this field, so it is left up to the adopting organization to choose a nomenclature that matches their org hierarchy.',
              examples: ['team', 'business-unit', 'product-area', 'root'],
              minLength: 1,
            },
            profile: {
              type: 'object',
              description:
                "Optional profile information about the group, mainly for display purposes. All fields of this structure are also optional. The email would be a group email of some form, that the group may wish to be used for contacting them. The picture is expected to be a URL pointing to an image that's representative of the group, and that a browser could fetch and render on a group page or similar.",
              properties: {
                displayName: {
                  type: 'string',
                  description: 'A simple display name to present to users.',
                  examples: ['Infrastructure'],
                  minLength: 1,
                },
                email: {
                  type: 'string',
                  description: 'An email where this entity can be reached.',
                  examples: ['infrastructure@example.com'],
                  minLength: 1,
                },
                picture: {
                  type: 'string',
                  description:
                    'The URL of an image that represents this entity.',
                  examples: [
                    'https://example.com/groups/bu-infrastructure.jpeg',
                  ],
                  minLength: 1,
                },
              },
            },
            parent: {
              type: 'string',
              description:
                'The immediate parent group in the hierarchy, if any. Not all groups must have a parent; the catalog supports multi-root hierarchies. Groups may however not have more than one parent. This field is an entity reference.',
              examples: ['ops'],
              minLength: 1,
            },
            children: {
              type: 'array',
              description:
                'The immediate child groups of this group in the hierarchy (whose parent field points to this group). The list must be present, but may be empty if there are no child groups. The items are not guaranteed to be ordered in any particular way. The entries of this array are entity references.',
              items: {
                type: 'string',
                examples: ['backstage', 'other'],
                minLength: 1,
              },
            },
          },
        },
      },
    },
  ],
};
function validate31(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="GroupV1alpha1" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (
    !validate21(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.spec === undefined && (missing0 = 'spec')) {
        validate31.errors = [
          {
            keyword: 'required',
            dataPath,
            schemaPath: '#/allOf/1/required',
            params: { missingProperty: missing0 },
            message: `should have required property '${missing0}'`,
          },
        ];
        return false;
      }
      if (data.apiVersion !== undefined) {
        const data0 = data.apiVersion;
        const _errs2 = errors;
        if (
          !(
            data0 === 'backstage.io/v1alpha1' ||
            data0 === 'backstage.io/v1beta1'
          )
        ) {
          validate31.errors = [
            {
              keyword: 'enum',
              dataPath: `${dataPath}/apiVersion`,
              schemaPath: '#/allOf/1/properties/apiVersion/enum',
              params: {
                allowedValues: schema32.allOf[1].properties.apiVersion.enum,
              },
              message: 'should be equal to one of the allowed values',
            },
          ];
          return false;
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.kind !== undefined) {
          const _errs3 = errors;
          if (!(data.kind === 'Group')) {
            validate31.errors = [
              {
                keyword: 'enum',
                dataPath: `${dataPath}/kind`,
                schemaPath: '#/allOf/1/properties/kind/enum',
                params: {
                  allowedValues: schema32.allOf[1].properties.kind.enum,
                },
                message: 'should be equal to one of the allowed values',
              },
            ];
            return false;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.spec !== undefined) {
            const data2 = data.spec;
            const _errs4 = errors;
            if (data2 && typeof data2 === 'object' && !Array.isArray(data2)) {
              let missing1;
              if (
                (data2.type === undefined && (missing1 = 'type')) ||
                (data2.children === undefined && (missing1 = 'children'))
              ) {
                validate31.errors = [
                  {
                    keyword: 'required',
                    dataPath: `${dataPath}/spec`,
                    schemaPath: '#/allOf/1/properties/spec/required',
                    params: { missingProperty: missing1 },
                    message: `should have required property '${missing1}'`,
                  },
                ];
                return false;
              }
              if (data2.type !== undefined) {
                const data3 = data2.type;
                const _errs5 = errors;
                if (typeof data3 === 'string') {
                  if (func8(data3) < 1) {
                    validate31.errors = [
                      {
                        keyword: 'minLength',
                        dataPath: `${dataPath}/spec/type`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/type/minLength',
                        params: { limit: 1 },
                        message: 'should NOT have fewer than 1 characters',
                      },
                    ];
                    return false;
                  }
                } else {
                  validate31.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/spec/type`,
                      schemaPath:
                        '#/allOf/1/properties/spec/properties/type/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs5 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data2.profile !== undefined) {
                  const data4 = data2.profile;
                  const _errs6 = errors;
                  if (
                    data4 &&
                    typeof data4 === 'object' &&
                    !Array.isArray(data4)
                  ) {
                    if (data4.displayName !== undefined) {
                      const data5 = data4.displayName;
                      const _errs7 = errors;
                      if (typeof data5 === 'string') {
                        if (func8(data5) < 1) {
                          validate31.errors = [
                            {
                              keyword: 'minLength',
                              dataPath: `${dataPath}/spec/profile/displayName`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/profile/properties/displayName/minLength',
                              params: { limit: 1 },
                              message:
                                'should NOT have fewer than 1 characters',
                            },
                          ];
                          return false;
                        }
                      } else {
                        validate31.errors = [
                          {
                            keyword: 'type',
                            dataPath: `${dataPath}/spec/profile/displayName`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/profile/properties/displayName/type',
                            params: { type: 'string' },
                            message: 'should be string',
                          },
                        ];
                        return false;
                      }
                      var valid3 = _errs7 === errors;
                    } else {
                      var valid3 = true;
                    }
                    if (valid3) {
                      if (data4.email !== undefined) {
                        const data6 = data4.email;
                        const _errs8 = errors;
                        if (typeof data6 === 'string') {
                          if (func8(data6) < 1) {
                            validate31.errors = [
                              {
                                keyword: 'minLength',
                                dataPath: `${dataPath}/spec/profile/email`,
                                schemaPath:
                                  '#/allOf/1/properties/spec/properties/profile/properties/email/minLength',
                                params: { limit: 1 },
                                message:
                                  'should NOT have fewer than 1 characters',
                              },
                            ];
                            return false;
                          }
                        } else {
                          validate31.errors = [
                            {
                              keyword: 'type',
                              dataPath: `${dataPath}/spec/profile/email`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/profile/properties/email/type',
                              params: { type: 'string' },
                              message: 'should be string',
                            },
                          ];
                          return false;
                        }
                        var valid3 = _errs8 === errors;
                      } else {
                        var valid3 = true;
                      }
                      if (valid3) {
                        if (data4.picture !== undefined) {
                          const data7 = data4.picture;
                          const _errs9 = errors;
                          if (typeof data7 === 'string') {
                            if (func8(data7) < 1) {
                              validate31.errors = [
                                {
                                  keyword: 'minLength',
                                  dataPath: `${dataPath}/spec/profile/picture`,
                                  schemaPath:
                                    '#/allOf/1/properties/spec/properties/profile/properties/picture/minLength',
                                  params: { limit: 1 },
                                  message:
                                    'should NOT have fewer than 1 characters',
                                },
                              ];
                              return false;
                            }
                          } else {
                            validate31.errors = [
                              {
                                keyword: 'type',
                                dataPath: `${dataPath}/spec/profile/picture`,
                                schemaPath:
                                  '#/allOf/1/properties/spec/properties/profile/properties/picture/type',
                                params: { type: 'string' },
                                message: 'should be string',
                              },
                            ];
                            return false;
                          }
                          var valid3 = _errs9 === errors;
                        } else {
                          var valid3 = true;
                        }
                      }
                    }
                  } else {
                    validate31.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/spec/profile`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/profile/type',
                        params: { type: 'object' },
                        message: 'should be object',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs6 === errors;
                } else {
                  var valid2 = true;
                }
                if (valid2) {
                  if (data2.parent !== undefined) {
                    const data8 = data2.parent;
                    const _errs10 = errors;
                    if (typeof data8 === 'string') {
                      if (func8(data8) < 1) {
                        validate31.errors = [
                          {
                            keyword: 'minLength',
                            dataPath: `${dataPath}/spec/parent`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/parent/minLength',
                            params: { limit: 1 },
                            message: 'should NOT have fewer than 1 characters',
                          },
                        ];
                        return false;
                      }
                    } else {
                      validate31.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/spec/parent`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/parent/type',
                          params: { type: 'string' },
                          message: 'should be string',
                        },
                      ];
                      return false;
                    }
                    var valid2 = _errs10 === errors;
                  } else {
                    var valid2 = true;
                  }
                  if (valid2) {
                    if (data2.children !== undefined) {
                      const data9 = data2.children;
                      const _errs11 = errors;
                      if (Array.isArray(data9)) {
                        const len0 = data9.length;
                        for (let i0 = 0; i0 < len0; i0++) {
                          const data10 = data9[i0];
                          const _errs12 = errors;
                          if (typeof data10 === 'string') {
                            if (func8(data10) < 1) {
                              validate31.errors = [
                                {
                                  keyword: 'minLength',
                                  dataPath: `${dataPath}/spec/children/${i0}`,
                                  schemaPath:
                                    '#/allOf/1/properties/spec/properties/children/items/minLength',
                                  params: { limit: 1 },
                                  message:
                                    'should NOT have fewer than 1 characters',
                                },
                              ];
                              return false;
                            }
                          } else {
                            validate31.errors = [
                              {
                                keyword: 'type',
                                dataPath: `${dataPath}/spec/children/${i0}`,
                                schemaPath:
                                  '#/allOf/1/properties/spec/properties/children/items/type',
                                params: { type: 'string' },
                                message: 'should be string',
                              },
                            ];
                            return false;
                          }
                          const valid4 = _errs12 === errors;
                          if (!valid4) {
                            break;
                          }
                        }
                      } else {
                        validate31.errors = [
                          {
                            keyword: 'type',
                            dataPath: `${dataPath}/spec/children`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/children/type',
                            params: { type: 'array' },
                            message: 'should be array',
                          },
                        ];
                        return false;
                      }
                      var valid2 = _errs11 === errors;
                    } else {
                      var valid2 = true;
                    }
                  }
                }
              }
            } else {
              validate31.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/spec`,
                  schemaPath: '#/allOf/1/properties/spec/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate31.errors = [
        {
          keyword: 'type',
          dataPath,
          schemaPath: '#/allOf/1/type',
          params: { type: 'object' },
          message: 'should be object',
        },
      ];
      return false;
    }
    var valid0 = _errs1 === errors;
  }
  validate31.errors = vErrors;
  return errors === 0;
}
exports.LocationV1alpha1 = validate33;
const schema33 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'LocationV1alpha1',
  description:
    'A location is a marker that references other places to look for catalog data.',
  examples: [
    {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Location',
      metadata: { name: 'org-data' },
      spec: {
        type: 'url',
        targets: [
          'http://github.com/myorg/myproject/org-data-dump/catalog-info-staff.yaml',
          'http://github.com/myorg/myproject/org-data-dump/catalog-info-consultants.yaml',
        ],
      },
    },
  ],
  allOf: [
    { $ref: 'Entity' },
    {
      type: 'object',
      required: ['spec'],
      properties: {
        apiVersion: { enum: ['backstage.io/v1alpha1', 'backstage.io/v1beta1'] },
        kind: { enum: ['Location'] },
        spec: {
          type: 'object',
          required: [],
          properties: {
            type: {
              type: 'string',
              description:
                "The single location type, that's common to the targets specified in the spec. If it is left out, it is inherited from the location type that originally read the entity data.",
              examples: ['url'],
              minLength: 1,
            },
            target: {
              type: 'string',
              description:
                'A single target as a string. Can be either an absolute path/URL (depending on the type), or a relative path such as ./details/catalog-info.yaml which is resolved relative to the location of this Location entity itself.',
              examples: ['./details/catalog-info.yaml'],
              minLength: 1,
            },
            targets: {
              type: 'array',
              description:
                'A list of targets as strings. They can all be either absolute paths/URLs (depending on the type), or relative paths such as ./details/catalog-info.yaml which are resolved relative to the location of this Location entity itself.',
              items: {
                type: 'string',
                examples: [
                  './details/catalog-info.yaml',
                  'http://github.com/myorg/myproject/org-data-dump/catalog-info-staff.yaml',
                ],
                minLength: 1,
              },
            },
          },
        },
      },
    },
  ],
};
function validate33(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="LocationV1alpha1" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (
    !validate21(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.spec === undefined && (missing0 = 'spec')) {
        validate33.errors = [
          {
            keyword: 'required',
            dataPath,
            schemaPath: '#/allOf/1/required',
            params: { missingProperty: missing0 },
            message: `should have required property '${missing0}'`,
          },
        ];
        return false;
      }
      if (data.apiVersion !== undefined) {
        const data0 = data.apiVersion;
        const _errs2 = errors;
        if (
          !(
            data0 === 'backstage.io/v1alpha1' ||
            data0 === 'backstage.io/v1beta1'
          )
        ) {
          validate33.errors = [
            {
              keyword: 'enum',
              dataPath: `${dataPath}/apiVersion`,
              schemaPath: '#/allOf/1/properties/apiVersion/enum',
              params: {
                allowedValues: schema33.allOf[1].properties.apiVersion.enum,
              },
              message: 'should be equal to one of the allowed values',
            },
          ];
          return false;
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.kind !== undefined) {
          const _errs3 = errors;
          if (!(data.kind === 'Location')) {
            validate33.errors = [
              {
                keyword: 'enum',
                dataPath: `${dataPath}/kind`,
                schemaPath: '#/allOf/1/properties/kind/enum',
                params: {
                  allowedValues: schema33.allOf[1].properties.kind.enum,
                },
                message: 'should be equal to one of the allowed values',
              },
            ];
            return false;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.spec !== undefined) {
            const data2 = data.spec;
            const _errs4 = errors;
            if (data2 && typeof data2 === 'object' && !Array.isArray(data2)) {
              if (data2.type !== undefined) {
                const data3 = data2.type;
                const _errs5 = errors;
                if (typeof data3 === 'string') {
                  if (func8(data3) < 1) {
                    validate33.errors = [
                      {
                        keyword: 'minLength',
                        dataPath: `${dataPath}/spec/type`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/type/minLength',
                        params: { limit: 1 },
                        message: 'should NOT have fewer than 1 characters',
                      },
                    ];
                    return false;
                  }
                } else {
                  validate33.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/spec/type`,
                      schemaPath:
                        '#/allOf/1/properties/spec/properties/type/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs5 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data2.target !== undefined) {
                  const data4 = data2.target;
                  const _errs6 = errors;
                  if (typeof data4 === 'string') {
                    if (func8(data4) < 1) {
                      validate33.errors = [
                        {
                          keyword: 'minLength',
                          dataPath: `${dataPath}/spec/target`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/target/minLength',
                          params: { limit: 1 },
                          message: 'should NOT have fewer than 1 characters',
                        },
                      ];
                      return false;
                    }
                  } else {
                    validate33.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/spec/target`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/target/type',
                        params: { type: 'string' },
                        message: 'should be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs6 === errors;
                } else {
                  var valid2 = true;
                }
                if (valid2) {
                  if (data2.targets !== undefined) {
                    const data5 = data2.targets;
                    const _errs7 = errors;
                    if (Array.isArray(data5)) {
                      const len0 = data5.length;
                      for (let i0 = 0; i0 < len0; i0++) {
                        const data6 = data5[i0];
                        const _errs8 = errors;
                        if (typeof data6 === 'string') {
                          if (func8(data6) < 1) {
                            validate33.errors = [
                              {
                                keyword: 'minLength',
                                dataPath: `${dataPath}/spec/targets/${i0}`,
                                schemaPath:
                                  '#/allOf/1/properties/spec/properties/targets/items/minLength',
                                params: { limit: 1 },
                                message:
                                  'should NOT have fewer than 1 characters',
                              },
                            ];
                            return false;
                          }
                        } else {
                          validate33.errors = [
                            {
                              keyword: 'type',
                              dataPath: `${dataPath}/spec/targets/${i0}`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/targets/items/type',
                              params: { type: 'string' },
                              message: 'should be string',
                            },
                          ];
                          return false;
                        }
                        const valid3 = _errs8 === errors;
                        if (!valid3) {
                          break;
                        }
                      }
                    } else {
                      validate33.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/spec/targets`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/targets/type',
                          params: { type: 'array' },
                          message: 'should be array',
                        },
                      ];
                      return false;
                    }
                    var valid2 = _errs7 === errors;
                  } else {
                    var valid2 = true;
                  }
                }
              }
            } else {
              validate33.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/spec`,
                  schemaPath: '#/allOf/1/properties/spec/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate33.errors = [
        {
          keyword: 'type',
          dataPath,
          schemaPath: '#/allOf/1/type',
          params: { type: 'object' },
          message: 'should be object',
        },
      ];
      return false;
    }
    var valid0 = _errs1 === errors;
  }
  validate33.errors = vErrors;
  return errors === 0;
}
exports.ResourceV1alpha1 = validate35;
const schema34 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'ResourceV1alpha1',
  description:
    'A resource describes the infrastructure a system needs to operate, like BigTable databases, Pub/Sub topics, S3 buckets or CDNs. Modelling them together with components and systems allows to visualize resource footprint, and create tooling around them.',
  examples: [
    {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Resource',
      metadata: { name: 'artists-db', description: 'Stores artist details' },
      spec: {
        type: 'database',
        owner: 'artist-relations-team',
        system: 'artist-engagement-portal',
      },
    },
  ],
  allOf: [
    { $ref: 'Entity' },
    {
      type: 'object',
      required: ['spec'],
      properties: {
        apiVersion: { enum: ['backstage.io/v1alpha1', 'backstage.io/v1beta1'] },
        kind: { enum: ['Resource'] },
        spec: {
          type: 'object',
          required: ['type', 'owner'],
          properties: {
            type: {
              type: 'string',
              description: 'The type of resource.',
              examples: ['database', 's3-bucket', 'cluster'],
              minLength: 1,
            },
            owner: {
              type: 'string',
              description: 'An entity reference to the owner of the resource.',
              examples: ['artist-relations-team', 'user:john.johnson'],
              minLength: 1,
            },
            system: {
              type: 'string',
              description:
                'An entity reference to the system that the resource belongs to.',
              minLength: 1,
            },
          },
        },
      },
    },
  ],
};
function validate35(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="ResourceV1alpha1" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (
    !validate21(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.spec === undefined && (missing0 = 'spec')) {
        validate35.errors = [
          {
            keyword: 'required',
            dataPath,
            schemaPath: '#/allOf/1/required',
            params: { missingProperty: missing0 },
            message: `should have required property '${missing0}'`,
          },
        ];
        return false;
      }
      if (data.apiVersion !== undefined) {
        const data0 = data.apiVersion;
        const _errs2 = errors;
        if (
          !(
            data0 === 'backstage.io/v1alpha1' ||
            data0 === 'backstage.io/v1beta1'
          )
        ) {
          validate35.errors = [
            {
              keyword: 'enum',
              dataPath: `${dataPath}/apiVersion`,
              schemaPath: '#/allOf/1/properties/apiVersion/enum',
              params: {
                allowedValues: schema34.allOf[1].properties.apiVersion.enum,
              },
              message: 'should be equal to one of the allowed values',
            },
          ];
          return false;
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.kind !== undefined) {
          const _errs3 = errors;
          if (!(data.kind === 'Resource')) {
            validate35.errors = [
              {
                keyword: 'enum',
                dataPath: `${dataPath}/kind`,
                schemaPath: '#/allOf/1/properties/kind/enum',
                params: {
                  allowedValues: schema34.allOf[1].properties.kind.enum,
                },
                message: 'should be equal to one of the allowed values',
              },
            ];
            return false;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.spec !== undefined) {
            const data2 = data.spec;
            const _errs4 = errors;
            if (data2 && typeof data2 === 'object' && !Array.isArray(data2)) {
              let missing1;
              if (
                (data2.type === undefined && (missing1 = 'type')) ||
                (data2.owner === undefined && (missing1 = 'owner'))
              ) {
                validate35.errors = [
                  {
                    keyword: 'required',
                    dataPath: `${dataPath}/spec`,
                    schemaPath: '#/allOf/1/properties/spec/required',
                    params: { missingProperty: missing1 },
                    message: `should have required property '${missing1}'`,
                  },
                ];
                return false;
              }
              if (data2.type !== undefined) {
                const data3 = data2.type;
                const _errs5 = errors;
                if (typeof data3 === 'string') {
                  if (func8(data3) < 1) {
                    validate35.errors = [
                      {
                        keyword: 'minLength',
                        dataPath: `${dataPath}/spec/type`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/type/minLength',
                        params: { limit: 1 },
                        message: 'should NOT have fewer than 1 characters',
                      },
                    ];
                    return false;
                  }
                } else {
                  validate35.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/spec/type`,
                      schemaPath:
                        '#/allOf/1/properties/spec/properties/type/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs5 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data2.owner !== undefined) {
                  const data4 = data2.owner;
                  const _errs6 = errors;
                  if (typeof data4 === 'string') {
                    if (func8(data4) < 1) {
                      validate35.errors = [
                        {
                          keyword: 'minLength',
                          dataPath: `${dataPath}/spec/owner`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/owner/minLength',
                          params: { limit: 1 },
                          message: 'should NOT have fewer than 1 characters',
                        },
                      ];
                      return false;
                    }
                  } else {
                    validate35.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/spec/owner`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/owner/type',
                        params: { type: 'string' },
                        message: 'should be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs6 === errors;
                } else {
                  var valid2 = true;
                }
                if (valid2) {
                  if (data2.system !== undefined) {
                    const data5 = data2.system;
                    const _errs7 = errors;
                    if (typeof data5 === 'string') {
                      if (func8(data5) < 1) {
                        validate35.errors = [
                          {
                            keyword: 'minLength',
                            dataPath: `${dataPath}/spec/system`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/system/minLength',
                            params: { limit: 1 },
                            message: 'should NOT have fewer than 1 characters',
                          },
                        ];
                        return false;
                      }
                    } else {
                      validate35.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/spec/system`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/system/type',
                          params: { type: 'string' },
                          message: 'should be string',
                        },
                      ];
                      return false;
                    }
                    var valid2 = _errs7 === errors;
                  } else {
                    var valid2 = true;
                  }
                }
              }
            } else {
              validate35.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/spec`,
                  schemaPath: '#/allOf/1/properties/spec/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate35.errors = [
        {
          keyword: 'type',
          dataPath,
          schemaPath: '#/allOf/1/type',
          params: { type: 'object' },
          message: 'should be object',
        },
      ];
      return false;
    }
    var valid0 = _errs1 === errors;
  }
  validate35.errors = vErrors;
  return errors === 0;
}
exports.SystemV1alpha1 = validate37;
const schema35 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'SystemV1alpha1',
  description:
    'A system is a collection of resources and components. The system may expose or consume one or several APIs. It is viewed as abstraction level that provides potential consumers insights into exposed features without needing a too detailed view into the details of all components. This also gives the owning team the possibility to decide about published artifacts and APIs.',
  examples: [
    {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'System',
      metadata: {
        name: 'artist-engagement-portal',
        description: 'Handy tools to keep artists in the loop',
      },
      spec: { owner: 'artist-relations-team', domain: 'artists' },
    },
  ],
  allOf: [
    { $ref: 'Entity' },
    {
      type: 'object',
      required: ['spec'],
      properties: {
        apiVersion: { enum: ['backstage.io/v1alpha1', 'backstage.io/v1beta1'] },
        kind: { enum: ['System'] },
        spec: {
          type: 'object',
          required: ['owner'],
          properties: {
            owner: {
              type: 'string',
              description: 'An entity reference to the owner of the component.',
              examples: ['artist-relations-team', 'user:john.johnson'],
              minLength: 1,
            },
            domain: {
              type: 'string',
              description:
                'An entity reference to the domain that the system belongs to.',
              examples: ['artists'],
              minLength: 1,
            },
          },
        },
      },
    },
  ],
};
function validate37(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="SystemV1alpha1" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (
    !validate21(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.spec === undefined && (missing0 = 'spec')) {
        validate37.errors = [
          {
            keyword: 'required',
            dataPath,
            schemaPath: '#/allOf/1/required',
            params: { missingProperty: missing0 },
            message: `should have required property '${missing0}'`,
          },
        ];
        return false;
      }
      if (data.apiVersion !== undefined) {
        const data0 = data.apiVersion;
        const _errs2 = errors;
        if (
          !(
            data0 === 'backstage.io/v1alpha1' ||
            data0 === 'backstage.io/v1beta1'
          )
        ) {
          validate37.errors = [
            {
              keyword: 'enum',
              dataPath: `${dataPath}/apiVersion`,
              schemaPath: '#/allOf/1/properties/apiVersion/enum',
              params: {
                allowedValues: schema35.allOf[1].properties.apiVersion.enum,
              },
              message: 'should be equal to one of the allowed values',
            },
          ];
          return false;
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.kind !== undefined) {
          const _errs3 = errors;
          if (!(data.kind === 'System')) {
            validate37.errors = [
              {
                keyword: 'enum',
                dataPath: `${dataPath}/kind`,
                schemaPath: '#/allOf/1/properties/kind/enum',
                params: {
                  allowedValues: schema35.allOf[1].properties.kind.enum,
                },
                message: 'should be equal to one of the allowed values',
              },
            ];
            return false;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.spec !== undefined) {
            const data2 = data.spec;
            const _errs4 = errors;
            if (data2 && typeof data2 === 'object' && !Array.isArray(data2)) {
              let missing1;
              if (data2.owner === undefined && (missing1 = 'owner')) {
                validate37.errors = [
                  {
                    keyword: 'required',
                    dataPath: `${dataPath}/spec`,
                    schemaPath: '#/allOf/1/properties/spec/required',
                    params: { missingProperty: missing1 },
                    message: `should have required property '${missing1}'`,
                  },
                ];
                return false;
              }
              if (data2.owner !== undefined) {
                const data3 = data2.owner;
                const _errs5 = errors;
                if (typeof data3 === 'string') {
                  if (func8(data3) < 1) {
                    validate37.errors = [
                      {
                        keyword: 'minLength',
                        dataPath: `${dataPath}/spec/owner`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/owner/minLength',
                        params: { limit: 1 },
                        message: 'should NOT have fewer than 1 characters',
                      },
                    ];
                    return false;
                  }
                } else {
                  validate37.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/spec/owner`,
                      schemaPath:
                        '#/allOf/1/properties/spec/properties/owner/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs5 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data2.domain !== undefined) {
                  const data4 = data2.domain;
                  const _errs6 = errors;
                  if (typeof data4 === 'string') {
                    if (func8(data4) < 1) {
                      validate37.errors = [
                        {
                          keyword: 'minLength',
                          dataPath: `${dataPath}/spec/domain`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/domain/minLength',
                          params: { limit: 1 },
                          message: 'should NOT have fewer than 1 characters',
                        },
                      ];
                      return false;
                    }
                  } else {
                    validate37.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/spec/domain`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/domain/type',
                        params: { type: 'string' },
                        message: 'should be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs6 === errors;
                } else {
                  var valid2 = true;
                }
              }
            } else {
              validate37.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/spec`,
                  schemaPath: '#/allOf/1/properties/spec/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate37.errors = [
        {
          keyword: 'type',
          dataPath,
          schemaPath: '#/allOf/1/type',
          params: { type: 'object' },
          message: 'should be object',
        },
      ];
      return false;
    }
    var valid0 = _errs1 === errors;
  }
  validate37.errors = vErrors;
  return errors === 0;
}
exports.TemplateV1alpha1 = validate39;
const schema36 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'TemplateV1alpha1',
  description:
    'A Template describes a skeleton for use with the Scaffolder. It is used for describing what templating library is supported, and also for documenting the variables that the template requires using JSON Forms Schema.',
  examples: [
    {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Template',
      metadata: {
        name: 'react-ssr-template',
        title: 'React SSR Template',
        description:
          'Next.js application skeleton for creating isomorphic web applications.',
        tags: ['recommended', 'react'],
      },
      spec: {
        owner: 'artist-relations-team',
        templater: 'cookiecutter',
        type: 'website',
        path: '.',
        schema: {
          required: ['component-id', 'description'],
          properties: {
            component_id: {
              title: 'Name',
              type: 'string',
              description: 'Unique name of the component',
            },
            description: {
              title: 'Description',
              type: 'string',
              description: 'Description of the component',
            },
          },
        },
      },
    },
  ],
  allOf: [
    { $ref: 'Entity' },
    {
      type: 'object',
      required: ['spec'],
      properties: {
        apiVersion: { enum: ['backstage.io/v1alpha1', 'backstage.io/v1beta1'] },
        kind: { enum: ['Template'] },
        metadata: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description:
                'The nice display name for the template. This field is required as is used to reference the template to the user instead of the metadata.name field.',
              examples: ['React SSR Template'],
              minLength: 1,
            },
          },
        },
        spec: {
          type: 'object',
          required: ['type', 'templater', 'schema'],
          properties: {
            type: {
              type: 'string',
              description:
                'The type of component. This field is optional but recommended. The software catalog accepts any type value, but an organization should take great care to establish a proper taxonomy for these. Tools including Backstage itself may read this field and behave differently depending on its value. For example, a website type component may present tooling in the Backstage interface that is specific to just websites.',
              examples: ['service', 'website', 'library'],
              minLength: 1,
            },
            templater: {
              type: 'string',
              description:
                'The templating library that is supported by the template skeleton.',
              examples: ['cookiecutter'],
              minLength: 1,
            },
            path: {
              type: 'string',
              description:
                'The string location where the templater should be run if it is not on the same level as the template.yaml definition.',
              examples: ['./cookiecutter/skeleton'],
              minLength: 1,
            },
            schema: {
              type: 'object',
              description:
                'The JSONSchema describing the inputs for the template.',
            },
          },
        },
      },
    },
  ],
};
function validate39(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="TemplateV1alpha1" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (
    !validate21(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.spec === undefined && (missing0 = 'spec')) {
        validate39.errors = [
          {
            keyword: 'required',
            dataPath,
            schemaPath: '#/allOf/1/required',
            params: { missingProperty: missing0 },
            message: `should have required property '${missing0}'`,
          },
        ];
        return false;
      }
      if (data.apiVersion !== undefined) {
        const data0 = data.apiVersion;
        const _errs2 = errors;
        if (
          !(
            data0 === 'backstage.io/v1alpha1' ||
            data0 === 'backstage.io/v1beta1'
          )
        ) {
          validate39.errors = [
            {
              keyword: 'enum',
              dataPath: `${dataPath}/apiVersion`,
              schemaPath: '#/allOf/1/properties/apiVersion/enum',
              params: {
                allowedValues: schema36.allOf[1].properties.apiVersion.enum,
              },
              message: 'should be equal to one of the allowed values',
            },
          ];
          return false;
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.kind !== undefined) {
          const _errs3 = errors;
          if (!(data.kind === 'Template')) {
            validate39.errors = [
              {
                keyword: 'enum',
                dataPath: `${dataPath}/kind`,
                schemaPath: '#/allOf/1/properties/kind/enum',
                params: {
                  allowedValues: schema36.allOf[1].properties.kind.enum,
                },
                message: 'should be equal to one of the allowed values',
              },
            ];
            return false;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.metadata !== undefined) {
            const data2 = data.metadata;
            const _errs4 = errors;
            if (data2 && typeof data2 === 'object' && !Array.isArray(data2)) {
              if (data2.title !== undefined) {
                const data3 = data2.title;
                if (typeof data3 === 'string') {
                  if (func8(data3) < 1) {
                    validate39.errors = [
                      {
                        keyword: 'minLength',
                        dataPath: `${dataPath}/metadata/title`,
                        schemaPath:
                          '#/allOf/1/properties/metadata/properties/title/minLength',
                        params: { limit: 1 },
                        message: 'should NOT have fewer than 1 characters',
                      },
                    ];
                    return false;
                  }
                } else {
                  validate39.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/metadata/title`,
                      schemaPath:
                        '#/allOf/1/properties/metadata/properties/title/type',
                      params: { type: 'string' },
                      message: 'should be string',
                    },
                  ];
                  return false;
                }
              }
            } else {
              validate39.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/metadata`,
                  schemaPath: '#/allOf/1/properties/metadata/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
          if (valid1) {
            if (data.spec !== undefined) {
              const data4 = data.spec;
              const _errs6 = errors;
              if (data4 && typeof data4 === 'object' && !Array.isArray(data4)) {
                let missing1;
                if (
                  (data4.type === undefined && (missing1 = 'type')) ||
                  (data4.templater === undefined && (missing1 = 'templater')) ||
                  (data4.schema === undefined && (missing1 = 'schema'))
                ) {
                  validate39.errors = [
                    {
                      keyword: 'required',
                      dataPath: `${dataPath}/spec`,
                      schemaPath: '#/allOf/1/properties/spec/required',
                      params: { missingProperty: missing1 },
                      message: `should have required property '${missing1}'`,
                    },
                  ];
                  return false;
                }
                if (data4.type !== undefined) {
                  const data5 = data4.type;
                  const _errs7 = errors;
                  if (typeof data5 === 'string') {
                    if (func8(data5) < 1) {
                      validate39.errors = [
                        {
                          keyword: 'minLength',
                          dataPath: `${dataPath}/spec/type`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/type/minLength',
                          params: { limit: 1 },
                          message: 'should NOT have fewer than 1 characters',
                        },
                      ];
                      return false;
                    }
                  } else {
                    validate39.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/spec/type`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/type/type',
                        params: { type: 'string' },
                        message: 'should be string',
                      },
                    ];
                    return false;
                  }
                  var valid3 = _errs7 === errors;
                } else {
                  var valid3 = true;
                }
                if (valid3) {
                  if (data4.templater !== undefined) {
                    const data6 = data4.templater;
                    const _errs8 = errors;
                    if (typeof data6 === 'string') {
                      if (func8(data6) < 1) {
                        validate39.errors = [
                          {
                            keyword: 'minLength',
                            dataPath: `${dataPath}/spec/templater`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/templater/minLength',
                            params: { limit: 1 },
                            message: 'should NOT have fewer than 1 characters',
                          },
                        ];
                        return false;
                      }
                    } else {
                      validate39.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/spec/templater`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/templater/type',
                          params: { type: 'string' },
                          message: 'should be string',
                        },
                      ];
                      return false;
                    }
                    var valid3 = _errs8 === errors;
                  } else {
                    var valid3 = true;
                  }
                  if (valid3) {
                    if (data4.path !== undefined) {
                      const data7 = data4.path;
                      const _errs9 = errors;
                      if (typeof data7 === 'string') {
                        if (func8(data7) < 1) {
                          validate39.errors = [
                            {
                              keyword: 'minLength',
                              dataPath: `${dataPath}/spec/path`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/path/minLength',
                              params: { limit: 1 },
                              message:
                                'should NOT have fewer than 1 characters',
                            },
                          ];
                          return false;
                        }
                      } else {
                        validate39.errors = [
                          {
                            keyword: 'type',
                            dataPath: `${dataPath}/spec/path`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/path/type',
                            params: { type: 'string' },
                            message: 'should be string',
                          },
                        ];
                        return false;
                      }
                      var valid3 = _errs9 === errors;
                    } else {
                      var valid3 = true;
                    }
                    if (valid3) {
                      if (data4.schema !== undefined) {
                        const data8 = data4.schema;
                        const _errs10 = errors;
                        if (
                          !(
                            data8 &&
                            typeof data8 === 'object' &&
                            !Array.isArray(data8)
                          )
                        ) {
                          validate39.errors = [
                            {
                              keyword: 'type',
                              dataPath: `${dataPath}/spec/schema`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/schema/type',
                              params: { type: 'object' },
                              message: 'should be object',
                            },
                          ];
                          return false;
                        }
                        var valid3 = _errs10 === errors;
                      } else {
                        var valid3 = true;
                      }
                    }
                  }
                }
              } else {
                validate39.errors = [
                  {
                    keyword: 'type',
                    dataPath: `${dataPath}/spec`,
                    schemaPath: '#/allOf/1/properties/spec/type',
                    params: { type: 'object' },
                    message: 'should be object',
                  },
                ];
                return false;
              }
              var valid1 = _errs6 === errors;
            } else {
              var valid1 = true;
            }
          }
        }
      }
    } else {
      validate39.errors = [
        {
          keyword: 'type',
          dataPath,
          schemaPath: '#/allOf/1/type',
          params: { type: 'object' },
          message: 'should be object',
        },
      ];
      return false;
    }
    var valid0 = _errs1 === errors;
  }
  validate39.errors = vErrors;
  return errors === 0;
}
exports.UserV1alpha1 = validate41;
const schema37 = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'UserV1alpha1',
  description:
    'A user describes a person, such as an employee, a contractor, or similar. Users belong to Group entities in the catalog. These catalog user entries are connected to the way that authentication within the Backstage ecosystem works. See the auth section of the docs for a discussion of these concepts.',
  examples: [
    {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'User',
      metadata: { name: 'jdoe' },
      spec: {
        profile: {
          displayName: 'Jenny Doe',
          email: 'jenny-doe@example.com',
          picture: 'https://example.com/staff/jenny-with-party-hat.jpeg',
        },
        memberOf: ['team-b', 'employees'],
      },
    },
  ],
  allOf: [
    { $ref: 'Entity' },
    {
      type: 'object',
      required: ['spec'],
      properties: {
        apiVersion: { enum: ['backstage.io/v1alpha1', 'backstage.io/v1beta1'] },
        kind: { enum: ['User'] },
        spec: {
          type: 'object',
          required: ['memberOf'],
          properties: {
            profile: {
              type: 'object',
              description:
                "Optional profile information about the user, mainly for display purposes. All fields of this structure are also optional. The email would be a primary email of some form, that the user may wish to be used for contacting them. The picture is expected to be a URL pointing to an image that's representative of the user, and that a browser could fetch and render on a profile page or similar.",
              properties: {
                displayName: {
                  type: 'string',
                  description: 'A simple display name to present to users.',
                  examples: ['Jenny Doe'],
                  minLength: 1,
                },
                email: {
                  type: 'string',
                  description: 'An email where this user can be reached.',
                  examples: ['jenny-doe@example.com'],
                  minLength: 1,
                },
                picture: {
                  type: 'string',
                  description: 'The URL of an image that represents this user.',
                  examples: [
                    'https://example.com/staff/jenny-with-party-hat.jpeg',
                  ],
                  minLength: 1,
                },
              },
            },
            memberOf: {
              type: 'array',
              description:
                'The list of groups that the user is a direct member of (i.e., no transitive memberships are listed here). The list must be present, but may be empty if the user is not member of any groups. The items are not guaranteed to be ordered in any particular way. The entries of this array are entity references.',
              items: {
                type: 'string',
                examples: ['team-b', 'employees'],
                minLength: 1,
              },
            },
          },
        },
      },
    },
  ],
};
function validate41(
  data,
  { dataPath = '', parentData, parentDataProperty, rootData = data } = {},
) {
  /* # sourceURL="UserV1alpha1" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (
    !validate21(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs1 = errors;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.spec === undefined && (missing0 = 'spec')) {
        validate41.errors = [
          {
            keyword: 'required',
            dataPath,
            schemaPath: '#/allOf/1/required',
            params: { missingProperty: missing0 },
            message: `should have required property '${missing0}'`,
          },
        ];
        return false;
      }
      if (data.apiVersion !== undefined) {
        const data0 = data.apiVersion;
        const _errs2 = errors;
        if (
          !(
            data0 === 'backstage.io/v1alpha1' ||
            data0 === 'backstage.io/v1beta1'
          )
        ) {
          validate41.errors = [
            {
              keyword: 'enum',
              dataPath: `${dataPath}/apiVersion`,
              schemaPath: '#/allOf/1/properties/apiVersion/enum',
              params: {
                allowedValues: schema37.allOf[1].properties.apiVersion.enum,
              },
              message: 'should be equal to one of the allowed values',
            },
          ];
          return false;
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.kind !== undefined) {
          const _errs3 = errors;
          if (!(data.kind === 'User')) {
            validate41.errors = [
              {
                keyword: 'enum',
                dataPath: `${dataPath}/kind`,
                schemaPath: '#/allOf/1/properties/kind/enum',
                params: {
                  allowedValues: schema37.allOf[1].properties.kind.enum,
                },
                message: 'should be equal to one of the allowed values',
              },
            ];
            return false;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.spec !== undefined) {
            const data2 = data.spec;
            const _errs4 = errors;
            if (data2 && typeof data2 === 'object' && !Array.isArray(data2)) {
              let missing1;
              if (data2.memberOf === undefined && (missing1 = 'memberOf')) {
                validate41.errors = [
                  {
                    keyword: 'required',
                    dataPath: `${dataPath}/spec`,
                    schemaPath: '#/allOf/1/properties/spec/required',
                    params: { missingProperty: missing1 },
                    message: `should have required property '${missing1}'`,
                  },
                ];
                return false;
              }
              if (data2.profile !== undefined) {
                const data3 = data2.profile;
                const _errs5 = errors;
                if (
                  data3 &&
                  typeof data3 === 'object' &&
                  !Array.isArray(data3)
                ) {
                  if (data3.displayName !== undefined) {
                    const data4 = data3.displayName;
                    const _errs6 = errors;
                    if (typeof data4 === 'string') {
                      if (func8(data4) < 1) {
                        validate41.errors = [
                          {
                            keyword: 'minLength',
                            dataPath: `${dataPath}/spec/profile/displayName`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/profile/properties/displayName/minLength',
                            params: { limit: 1 },
                            message: 'should NOT have fewer than 1 characters',
                          },
                        ];
                        return false;
                      }
                    } else {
                      validate41.errors = [
                        {
                          keyword: 'type',
                          dataPath: `${dataPath}/spec/profile/displayName`,
                          schemaPath:
                            '#/allOf/1/properties/spec/properties/profile/properties/displayName/type',
                          params: { type: 'string' },
                          message: 'should be string',
                        },
                      ];
                      return false;
                    }
                    var valid3 = _errs6 === errors;
                  } else {
                    var valid3 = true;
                  }
                  if (valid3) {
                    if (data3.email !== undefined) {
                      const data5 = data3.email;
                      const _errs7 = errors;
                      if (typeof data5 === 'string') {
                        if (func8(data5) < 1) {
                          validate41.errors = [
                            {
                              keyword: 'minLength',
                              dataPath: `${dataPath}/spec/profile/email`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/profile/properties/email/minLength',
                              params: { limit: 1 },
                              message:
                                'should NOT have fewer than 1 characters',
                            },
                          ];
                          return false;
                        }
                      } else {
                        validate41.errors = [
                          {
                            keyword: 'type',
                            dataPath: `${dataPath}/spec/profile/email`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/profile/properties/email/type',
                            params: { type: 'string' },
                            message: 'should be string',
                          },
                        ];
                        return false;
                      }
                      var valid3 = _errs7 === errors;
                    } else {
                      var valid3 = true;
                    }
                    if (valid3) {
                      if (data3.picture !== undefined) {
                        const data6 = data3.picture;
                        const _errs8 = errors;
                        if (typeof data6 === 'string') {
                          if (func8(data6) < 1) {
                            validate41.errors = [
                              {
                                keyword: 'minLength',
                                dataPath: `${dataPath}/spec/profile/picture`,
                                schemaPath:
                                  '#/allOf/1/properties/spec/properties/profile/properties/picture/minLength',
                                params: { limit: 1 },
                                message:
                                  'should NOT have fewer than 1 characters',
                              },
                            ];
                            return false;
                          }
                        } else {
                          validate41.errors = [
                            {
                              keyword: 'type',
                              dataPath: `${dataPath}/spec/profile/picture`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/profile/properties/picture/type',
                              params: { type: 'string' },
                              message: 'should be string',
                            },
                          ];
                          return false;
                        }
                        var valid3 = _errs8 === errors;
                      } else {
                        var valid3 = true;
                      }
                    }
                  }
                } else {
                  validate41.errors = [
                    {
                      keyword: 'type',
                      dataPath: `${dataPath}/spec/profile`,
                      schemaPath:
                        '#/allOf/1/properties/spec/properties/profile/type',
                      params: { type: 'object' },
                      message: 'should be object',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs5 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data2.memberOf !== undefined) {
                  const data7 = data2.memberOf;
                  const _errs9 = errors;
                  if (Array.isArray(data7)) {
                    const len0 = data7.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      const data8 = data7[i0];
                      const _errs10 = errors;
                      if (typeof data8 === 'string') {
                        if (func8(data8) < 1) {
                          validate41.errors = [
                            {
                              keyword: 'minLength',
                              dataPath: `${dataPath}/spec/memberOf/${i0}`,
                              schemaPath:
                                '#/allOf/1/properties/spec/properties/memberOf/items/minLength',
                              params: { limit: 1 },
                              message:
                                'should NOT have fewer than 1 characters',
                            },
                          ];
                          return false;
                        }
                      } else {
                        validate41.errors = [
                          {
                            keyword: 'type',
                            dataPath: `${dataPath}/spec/memberOf/${i0}`,
                            schemaPath:
                              '#/allOf/1/properties/spec/properties/memberOf/items/type',
                            params: { type: 'string' },
                            message: 'should be string',
                          },
                        ];
                        return false;
                      }
                      const valid4 = _errs10 === errors;
                      if (!valid4) {
                        break;
                      }
                    }
                  } else {
                    validate41.errors = [
                      {
                        keyword: 'type',
                        dataPath: `${dataPath}/spec/memberOf`,
                        schemaPath:
                          '#/allOf/1/properties/spec/properties/memberOf/type',
                        params: { type: 'array' },
                        message: 'should be array',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs9 === errors;
                } else {
                  var valid2 = true;
                }
              }
            } else {
              validate41.errors = [
                {
                  keyword: 'type',
                  dataPath: `${dataPath}/spec`,
                  schemaPath: '#/allOf/1/properties/spec/type',
                  params: { type: 'object' },
                  message: 'should be object',
                },
              ];
              return false;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate41.errors = [
        {
          keyword: 'type',
          dataPath,
          schemaPath: '#/allOf/1/type',
          params: { type: 'object' },
          message: 'should be object',
        },
      ];
      return false;
    }
    var valid0 = _errs1 === errors;
  }
  validate41.errors = vErrors;
  return errors === 0;
}
