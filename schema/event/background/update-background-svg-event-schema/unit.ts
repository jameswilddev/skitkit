import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as svgSchemaHelpers from "../../../svg-schema/unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateBackgroundSvgEventSchema } from "../../../..";

export function validateUpdateBackgroundSvgEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (updateBackgroundSvgEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `updateBackgroundSvg`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg: `Test Svg`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      factory({
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg: `Test Svg`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateBackgroundSvg`,
      (type) => ({
        type,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg: `Test Svg`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      factory({
        type: `updateBackgroundSvg`,
        svg: `Test Svg`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      (backgroundUuid) => ({
        type: `updateBackgroundSvg`,
        backgroundUuid,
        svg: `Test Svg`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `svg`,
      schema,
      path,
      factory({
        type: `updateBackgroundSvg`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    svgSchemaHelpers.validateSvgSchema(`svg`, schema, `${path}.svg`, (svg) => ({
      type: `updateBackgroundSvg`,
      backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      svg,
    }));
  });
}

schemaHelpers.rejectsNonObjects(
  `updateBackgroundSvgEventSchema`,
  updateBackgroundSvgEventSchema,
  `instance`
);

validateUpdateBackgroundSvgEventSchema(
  `updateBackgroundSvgEventSchema`,
  updateBackgroundSvgEventSchema,
  `instance`,
  (updateBackgroundSvgEvent) => updateBackgroundSvgEvent
);
