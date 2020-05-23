import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

export const createSceneEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `sceneUuid`],
  properties: {
    type: {
      type: `string`,
      enum: [`createSceneEvent`],
    },
    sceneUuid: uuidSchema,
  },
};

export type CreateSceneEventSchema = {
  readonly type: `createSceneEvent`;
  readonly sceneUuid: UuidSchema;
};
