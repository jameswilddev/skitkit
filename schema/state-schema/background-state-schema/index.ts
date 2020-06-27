import * as jsonschema from "jsonschema";
import { NameSchema, nameSchema } from "../../name-schema";
import { SvgSchema, svgSchema } from "../../svg-schema";

export const backgroundStateSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`name`, `svg`],
  properties: {
    name: nameSchema,
    svg: svgSchema,
  },
};

export type BackgroundStateSchema = {
  readonly name: NameSchema;
  readonly svg: SvgSchema;
};
