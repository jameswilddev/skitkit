import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

export const createBackgroundEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `backgroundUuid`],
  properties: {
    type: {
      type: `string`,
      enum: [`createBackground`],
    },
    backgroundUuid: uuidSchema,
  },
};

export type CreateBackgroundEventSchema = {
  readonly type: `createBackground`;
  readonly backgroundUuid: UuidSchema;
};
