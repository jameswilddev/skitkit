import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";
import { nameSchema, NameSchema } from "../../../name-schema";

export const updateBackgroundNameEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `backgroundUuid`, `name`],
  properties: {
    type: {
      type: `string`,
      enum: [`updateBackgroundName`],
    },
    backgroundUuid: uuidSchema,
    name: nameSchema,
  },
};

export type UpdateBackgroundNameEventSchema = {
  readonly type: `updateBackgroundName`;
  readonly backgroundUuid: UuidSchema;
  readonly name: NameSchema;
};
