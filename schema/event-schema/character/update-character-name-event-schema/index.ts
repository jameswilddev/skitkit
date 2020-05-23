import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";
import { nameSchema, NameSchema } from "../../../name-schema";

export const updateCharacterNameEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `characterUuid`, `name`],
  properties: {
    type: {
      type: `string`,
      enum: [`updateCharacterName`],
    },
    characterUuid: uuidSchema,
    name: nameSchema,
  },
};

export type UpdateCharacterNameEventSchema = {
  readonly type: `updateCharacterName`;
  readonly characterUuid: UuidSchema;
  readonly name: NameSchema;
};
