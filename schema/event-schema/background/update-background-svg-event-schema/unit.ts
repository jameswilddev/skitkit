import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as svgSchemaHelpers from "../../../svg-schema/unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateBackgroundSvgEventSchema } from "../../../..";

export function validateUpdateBackgroundSvgEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateBackgroundSvgEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      instanceFactory({
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
      overriddenErrors,
      instanceFactory({
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg: `Test Svg`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateBackgroundSvg`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          svg: `Test Svg`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateBackgroundSvg`,
        svg: `Test Svg`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      overriddenErrors,
      (backgroundUuid) =>
        instanceFactory({
          type: `updateBackgroundSvg`,
          backgroundUuid,
          svg: `Test Svg`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `svg`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateBackgroundSvg`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    svgSchemaHelpers.validateSvgSchema(
      `svg`,
      schema,
      `${path}.svg`,
      overriddenErrors,
      (svg) =>
        instanceFactory({
          type: `updateBackgroundSvg`,
          backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          svg,
        })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `updateBackgroundSvgEventSchema`,
  updateBackgroundSvgEventSchema,
  `instance`,
  null
);

validateUpdateBackgroundSvgEventSchema(
  `updateBackgroundSvgEventSchema`,
  updateBackgroundSvgEventSchema,
  `instance`,
  null,
  (updateBackgroundSvgEvent) => updateBackgroundSvgEvent
);
