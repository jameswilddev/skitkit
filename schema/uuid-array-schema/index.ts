import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../uuid-schema";

export const uuidArraySchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `array`,
  items: uuidSchema,
  minItems: 1,
  uniqueItems: true,
};

export type UuidArraySchema = ReadonlyArray<UuidSchema>;
