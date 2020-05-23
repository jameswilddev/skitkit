import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateSceneBackgroundEventSchema } from "../../../..";

export function validateUpdateSceneBackgroundEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  factory: (updateSceneBackgroundEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `updateSceneBackground`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        backgroundUuid: `8870dec9-04b8-4d55-adc1-51d70a84a1a4`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      factory({
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        backgroundUuid: `8870dec9-04b8-4d55-adc1-51d70a84a1a4`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateSceneBackground`,
      overriddenErrors,
      (type) =>
        factory({
          type,
          sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          backgroundUuid: `8870dec9-04b8-4d55-adc1-51d70a84a1a4`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `sceneUuid`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `updateSceneBackground`,
        backgroundUuid: `8870dec9-04b8-4d55-adc1-51d70a84a1a4`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `sceneUuid`,
      schema,
      `${path}.sceneUuid`,
      overriddenErrors,
      (sceneUuid) =>
        factory({
          type: `updateSceneBackground`,
          sceneUuid,
          backgroundUuid: `8870dec9-04b8-4d55-adc1-51d70a84a1a4`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `updateSceneBackground`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      overriddenErrors,
      (backgroundUuid) =>
        factory({
          type: `updateSceneBackground`,
          sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          backgroundUuid,
        })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `updateSceneBackgroundEventSchema`,
  updateSceneBackgroundEventSchema,
  `instance`,
  null
);

validateUpdateSceneBackgroundEventSchema(
  `updateSceneBackgroundEventSchema`,
  updateSceneBackgroundEventSchema,
  `instance`,
  null,
  (updateSceneBackgroundEvent) => updateSceneBackgroundEvent
);
