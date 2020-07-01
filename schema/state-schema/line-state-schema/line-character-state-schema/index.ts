import * as jsonschema from "jsonschema";
import { UuidSchema, uuidSchema } from "../../../uuid-schema";

export const lineCharacterStateSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`emoteUuid`],
  properties: {
    emoteUuid: uuidSchema,
  },
};

export type LineCharacterStateSchema = {
  readonly emoteUuid: UuidSchema;
};
