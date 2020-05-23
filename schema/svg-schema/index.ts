import * as jsonschema from "jsonschema";

export const svgSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `string`,
  minLength: 1,
  maxLength: 1024 * 1024,
};

export type SvgSchema = string;
