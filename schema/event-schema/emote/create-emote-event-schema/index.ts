import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";

export const createEmoteEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `characterUuid`, `emoteUuid`],
  properties: {
    type: {
      type: `string`,
      enum: [`createEmote`],
    },
    characterUuid: uuidSchema,
    emoteUuid: uuidSchema,
  },
};

export type CreateEmoteEventSchema = {
  readonly type: `createEmote`;
  readonly characterUuid: UuidSchema;
  readonly emoteUuid: UuidSchema;
};
