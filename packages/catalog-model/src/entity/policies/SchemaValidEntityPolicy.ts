/*
 * Copyright 2020 Spotify AB
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

import { Entity as validateEntity } from '../../generated/schema';
import { EntityPolicy } from './types';
import { Entity } from '../Entity';

/**
 * Ensures that the entity spec is valid according to a schema.
 *
 * This should be the first policy in the list, to ensure that other downstream
 * policies can work with a structure that is at least valid in therms of the
 * typescript type.
 */
export class SchemaValidEntityPolicy implements EntityPolicy {
  async enforce(entity: Entity): Promise<Entity> {
    const result = validateEntity(entity);
    if (result === true) {
      return entity;
    }

    const [error] = (validateEntity as any).errors || [];
    if (!error) {
      throw new Error(`Malformed envelope, Unknown error`);
    }

    throw new Error(
      `Malformed envelope, ${error.dataPath || '<root>'} ${error.message}`,
    );
  }
}
