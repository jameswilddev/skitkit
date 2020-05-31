import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

export const updateLineCharacterEmoteEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `lineUuid`, `emoteUuid`],
  properties: {
    type: {
      type: `string`,
      enum: [`updateLineCharacterEmote`],
    },
    lineUuid: uuidSchema,
    emoteUuid: uuidSchema,
  },
};

export type UpdateLineCharacterEmoteEventSchema = {
  readonly type: `updateLineCharacterEmote`;
  readonly lineUuid: UuidSchema;
  readonly emoteUuid: UuidSchema;
};
