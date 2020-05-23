import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

export const deleteEmoteEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `emoteUuid`],
  properties: {
    type: {
      type: `string`,
      enum: [`deleteEmote`],
    },
    emoteUuid: uuidSchema,
  },
};

export type DeleteEmoteEventSchema = {
  readonly type: `deleteEmote`;
  readonly emoteUuid: UuidSchema;
};
