import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";
import { svgSchema, SvgSchema } from "../../../svg-schema";

export const updateBackgroundSvgEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `backgroundUuid`, `svg`],
  properties: {
    type: {
      type: `string`,
      enum: [`updateBackgroundSvg`],
    },
    backgroundUuid: uuidSchema,
    svg: svgSchema,
  },
};

export type UpdateBackgroundSvgEventSchema = {
  readonly type: `updateBackgroundSvg`;
  readonly backgroundUuid: UuidSchema;
  readonly svg: SvgSchema;
};
