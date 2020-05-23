import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as svgSchemaHelpers from "../../../svg-schema/unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateEmoteSvgEventSchema } from "../../../..";

export function validateUpdateEmoteSvgEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  factory: (updateEmoteSvgEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `updateEmoteSvg`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg: `Test Svg`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      factory({
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg: `Test Svg`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateEmoteSvg`,
      overriddenErrors,
      (type) => ({
        type,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg: `Test Svg`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `emoteUuid`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `updateEmoteSvg`,
        svg: `Test Svg`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `emoteUuid`,
      schema,
      `${path}.emoteUuid`,
      overriddenErrors,
      (emoteUuid) => ({
        type: `updateEmoteSvg`,
        emoteUuid,
        svg: `Test Svg`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `svg`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `updateEmoteSvg`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    svgSchemaHelpers.validateSvgSchema(
      `svg`,
      schema,
      `${path}.svg`,
      overriddenErrors,
      (svg) => ({
        type: `updateEmoteSvg`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg,
      })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `updateEmoteSvgEventSchema`,
  updateEmoteSvgEventSchema,
  `instance`,
  null
);

validateUpdateEmoteSvgEventSchema(
  `updateEmoteSvgEventSchema`,
  updateEmoteSvgEventSchema,
  `instance`,
  null,
  (updateEmoteSvgEvent) => updateEmoteSvgEvent
);
