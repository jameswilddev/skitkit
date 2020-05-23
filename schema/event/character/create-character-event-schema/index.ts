import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

export const createCharacterEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `characterUuid`],
  properties: {
    type: {
      type: `string`,
      enum: [`createCharacter`],
    },
    characterUuid: uuidSchema,
  },
};

export type CreateCharacterEventSchema = {
  readonly type: `createCharacter`;
  readonly characterUuid: UuidSchema;
};
