import * as jsonschema from "jsonschema";
import { uuidSchema, UuidSchema } from "../../../uuid-schema";
import { svgSchema, SvgSchema } from "../../../svg-schema";

export const updateEmoteSvgEventSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`type`, `emoteUuid`, `svg`],
  properties: {
    type: {
      type: `string`,
      enum: [`updateEmoteSvg`],
    },
    emoteUuid: uuidSchema,
    svg: svgSchema,
  },
};

export type UpdateEmoteSvgEventSchema = {
  readonly type: `updateEmoteSvg`;
  readonly emoteUuid: UuidSchema;
  readonly svg: SvgSchema;
};
