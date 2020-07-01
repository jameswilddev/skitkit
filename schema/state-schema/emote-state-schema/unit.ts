import * as jsonschema from "jsonschema";
import { accepts, rejectsMissingProperty, rejectsNonObjects } from "../../unit";
import { validateNameSchema } from "../../name-schema/unit";
import { validateSvgSchema } from "../../svg-schema/unit";
import { Json, emoteStateSchema } from "../../..";
import { validateUuidSchema } from "../../uuid-schema/unit";

export function validateEmoteStateSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (emoteState: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        characterUuid: `faee5b62-7886-4957-9cfe-6bd98fdec071`,
        name: `Test Name`,
        svg: `Test Svg`,
      }),
      schema
    );

    rejectsNonObjects(
      `non-object`,
      schema,
      path,
      overriddenErrors,
      (nonObject) => instanceFactory(nonObject)
    );

    rejectsMissingProperty(
      `characterUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        name: `Test Name`,
        svg: `Test Svg`,
      })
    );

    validateUuidSchema(
      `characterUuid`,
      schema,
      `${path}.characterUuid`,
      overriddenErrors,
      (characterUuid) =>
        instanceFactory({
          characterUuid,
          name: `Test Name`,
          svg: `Test Svg`,
        })
    );

    rejectsMissingProperty(
      `name`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        characterUuid: `faee5b62-7886-4957-9cfe-6bd98fdec071`,
        svg: `Test Svg`,
      })
    );

    validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      overriddenErrors,
      (name) =>
        instanceFactory({
          characterUuid: `faee5b62-7886-4957-9cfe-6bd98fdec071`,
          name,
          svg: `Test Svg`,
        })
    );

    rejectsMissingProperty(
      `svg`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        characterUuid: `faee5b62-7886-4957-9cfe-6bd98fdec071`,
        name: `Test Name`,
      })
    );

    validateSvgSchema(`svg`, schema, `${path}.svg`, overriddenErrors, (svg) =>
      instanceFactory({
        characterUuid: `faee5b62-7886-4957-9cfe-6bd98fdec071`,
        name: `Test Name`,
        svg,
      })
    );
  });
}

validateEmoteStateSchema(
  `emoteStateSchema`,
  emoteStateSchema,
  `instance`,
  null,
  (emoteState) => emoteState
);
