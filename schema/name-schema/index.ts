import * as jsonschema from "jsonschema";

export const nameSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `string`,
  pattern: `^\\S(?:.*\\S)?$`,
  maxLength: 50,
};

export type NameSchema = string;
