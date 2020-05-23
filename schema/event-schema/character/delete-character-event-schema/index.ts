import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

export const deleteCharacterEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `characterUuid`],
  properties: {
    type: {
      type: `string`,
      enum: [`deleteCharacter`],
    },
    characterUuid: uuidSchema,
  },
};

export type DeleteCharacterEventSchema = {
  readonly type: `deleteCharacter`;
  readonly characterUuid: UuidSchema;
};
