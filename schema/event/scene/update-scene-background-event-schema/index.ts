import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

export const updateSceneBackgroundEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `sceneUuid`, `backgroundUuid`],
  properties: {
    type: {
      type: `string`,
      enum: [`updateSceneBackground`],
    },
    sceneUuid: uuidSchema,
    backgroundUuid: uuidSchema,
  },
};

export type UpdateSceneBackgroundEventSchema = {
  readonly type: `updateSceneBackground`;
  readonly sceneUuid: UuidSchema;
  readonly backgroundUuid: UuidSchema;
};
