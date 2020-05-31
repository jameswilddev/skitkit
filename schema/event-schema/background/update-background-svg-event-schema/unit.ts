import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateSvgSchema } from "../../../svg-schema/unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { Json, updateBackgroundSvgEventSchema } from "../../../..";

export function validateUpdateBackgroundSvgEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateBackgroundSvgEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `updateBackgroundSvg`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg: `Test Svg`,
      }),
      schema
    );

    rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg: `Test Svg`,
      })
    );

    rejectsOtherThanExpectedString(
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

    rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateBackgroundSvg`,
        svg: `Test Svg`,
      })
    );

    validateUuidSchema(
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

    rejectsMissingProperty(
      `svg`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateBackgroundSvg`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    validateSvgSchema(`svg`, schema, `${path}.svg`, overriddenErrors, (svg) =>
      instanceFactory({
        type: `updateBackgroundSvg`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg,
      })
    );
  });
}

rejectsNonObjects(
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
