import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { validateSvgSchema } from "../../../svg-schema/unit";
import { Json, updateEmoteSvgEventSchema } from "../../../..";

export function validateUpdateEmoteSvgEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateEmoteSvgEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `updateEmoteSvg`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
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
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg: `Test Svg`,
      })
    );

    rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateEmoteSvg`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          svg: `Test Svg`,
        })
    );

    rejectsMissingProperty(
      `emoteUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateEmoteSvg`,
        svg: `Test Svg`,
      })
    );

    validateUuidSchema(
      `emoteUuid`,
      schema,
      `${path}.emoteUuid`,
      overriddenErrors,
      (emoteUuid) =>
        instanceFactory({
          type: `updateEmoteSvg`,
          emoteUuid,
          svg: `Test Svg`,
        })
    );

    rejectsMissingProperty(
      `svg`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateEmoteSvg`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    validateSvgSchema(`svg`, schema, `${path}.svg`, overriddenErrors, (svg) =>
      instanceFactory({
        type: `updateEmoteSvg`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        svg,
      })
    );
  });
}

rejectsNonObjects(
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
