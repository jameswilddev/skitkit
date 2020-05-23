import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

export const deleteSceneEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `sceneUuid`],
  properties: {
    type: {
      type: `string`,
      enum: [`deleteSceneEvent`],
    },
    sceneUuid: uuidSchema,
  },
};

export type DeleteSceneEventSchema = {
  readonly type: `deleteSceneEvent`;
  readonly sceneUuid: UuidSchema;
};
