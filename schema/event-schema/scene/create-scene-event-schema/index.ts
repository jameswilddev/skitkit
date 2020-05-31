import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";
import {
  uuidUuidMapSchema,
  UuidUuidMapSchema,
} from "../../../uuid-uuid-map-schema";

export const createSceneEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `sceneUuid`, `backgroundUuid`, `characterEmoteUuids`],
  properties: {
    type: {
      type: `string`,
      enum: [`createScene`],
    },
    sceneUuid: uuidSchema,
    backgroundUuid: uuidSchema,
    characterEmoteUuids: uuidUuidMapSchema,
  },
};

export type CreateSceneEventSchema = {
  readonly type: `createScene`;
  readonly sceneUuid: UuidSchema;
  readonly backgroundUuid: UuidSchema;
  readonly characterEmoteUuids: UuidUuidMapSchema;
};
