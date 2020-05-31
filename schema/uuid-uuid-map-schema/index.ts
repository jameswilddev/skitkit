import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../uuid-schema";

export const uuidUuidMapSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  patternProperties: {
    "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$": uuidSchema,
  },
};

export type UuidUuidMapSchema = { readonly [uuid: string]: UuidSchema };
