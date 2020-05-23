import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

export const deleteBackgroundEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `backgroundUuid`],
  properties: {
    type: {
      type: `string`,
      enum: [`deleteBackground`],
    },
    backgroundUuid: uuidSchema,
  },
};

export type DeleteBackgroundEventSchema = {
  readonly type: `deleteBackground`;
  readonly backgroundUuid: UuidSchema;
};
