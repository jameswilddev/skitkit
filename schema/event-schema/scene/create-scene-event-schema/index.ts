import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

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
    characterEmoteUuids: {
      type: `object`,
      additionalProperties: false,
      patternProperties: {
        "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$": uuidSchema,
      },
    },
  },
};

export type CreateSceneEventSchema = {
  readonly type: `createScene`;
  readonly sceneUuid: UuidSchema;
  readonly backgroundUuid: UuidSchema;
  readonly characterEmoteUuids: {
    readonly [characterUuid: string]: UuidSchema;
  };
};
