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
      enum: [`deleteScene`],
    },
    sceneUuid: uuidSchema,
  },
};

export type DeleteSceneEventSchema = {
  readonly type: `deleteScene`;
  readonly sceneUuid: UuidSchema;
};
