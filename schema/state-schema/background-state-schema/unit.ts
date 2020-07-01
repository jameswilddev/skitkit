import * as jsonschema from "jsonschema";
import { accepts, rejectsMissingProperty, rejectsNonObjects } from "../../unit";
import { validateNameSchema } from "../../name-schema/unit";
import { validateSvgSchema } from "../../svg-schema/unit";
import { Json, backgroundStateSchema } from "../../..";

export function validateBackgroundStateSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (backgroundState: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
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
      `name`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
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
        name: `Test Name`,
      })
    );

    validateSvgSchema(`svg`, schema, `${path}.svg`, overriddenErrors, (svg) =>
      instanceFactory({
        name: `Test Name`,
        svg,
      })
    );
  });
}

validateBackgroundStateSchema(
  `backgroundStateSchema`,
  backgroundStateSchema,
  `instance`,
  null,
  (backgroundState) => backgroundState
);
