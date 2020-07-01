import * as jsonschema from "jsonschema";

export const textSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `string`,
  pattern: `^\\S(?:.*\\S)?$`,
  maxLength: 200,
};

export type TextSchema = string;
