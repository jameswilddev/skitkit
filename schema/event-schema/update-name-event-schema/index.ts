import * as jsonschema from "jsonschema";
import { nameSchema, NameSchema } from "../../name-schema";

export const updateNameEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `name`],
  properties: {
    type: {
      type: `string`,
      enum: [`updateName`],
    },
    name: nameSchema,
  },
};

export type UpdateNameEventSchema = {
  readonly type: `updateName`;
  readonly name: NameSchema;
};
