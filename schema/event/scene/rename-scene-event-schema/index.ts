import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";
import { nameSchema, NameSchema } from "../../../name-schema";

export const renameSceneEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `sceneUuid`, `name`],
  properties: {
    type: {
      type: `string`,
      enum: [`renameSceneEvent`],
    },
    sceneUuid: uuidSchema,
    name: nameSchema,
  },
};

export type RenameSceneEventSchema = {
  readonly type: `renameSceneEvent`;
  readonly sceneUuid: UuidSchema;
  readonly name: NameSchema;
};
