import * as jsonschema from "jsonschema";
import { NameSchema, nameSchema } from "../../name-schema";
import { UuidSchema } from "../../uuid-schema";
import { uuidArraySchema } from "../../uuid-array-schema";

export const characterStateSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`name`, `emoteUuids`],
  properties: {
    name: nameSchema,
    emoteUuids: uuidArraySchema,
  },
};

export type CharacterStateSchema = {
  readonly name: NameSchema;
  readonly emoteUuids: ReadonlyArray<UuidSchema>;
};
