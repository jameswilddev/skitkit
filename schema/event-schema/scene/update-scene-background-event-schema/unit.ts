import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { Json, updateSceneBackgroundEventSchema } from "../../../..";

export function validateUpdateSceneBackgroundEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateSceneBackgroundEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `updateSceneBackground`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        backgroundUuid: `8870dec9-04b8-4d55-adc1-51d70a84a1a4`,
      }),
      schema
    );

    rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        backgroundUuid: `8870dec9-04b8-4d55-adc1-51d70a84a1a4`,
      })
    );

    rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateSceneBackground`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          backgroundUuid: `8870dec9-04b8-4d55-adc1-51d70a84a1a4`,
        })
    );

    rejectsMissingProperty(
      `sceneUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateSceneBackground`,
        backgroundUuid: `8870dec9-04b8-4d55-adc1-51d70a84a1a4`,
      })
    );

    validateUuidSchema(
      `sceneUuid`,
      schema,
      `${path}.sceneUuid`,
      overriddenErrors,
      (sceneUuid) =>
        instanceFactory({
          type: `updateSceneBackground`,
          sceneUuid,
          backgroundUuid: `8870dec9-04b8-4d55-adc1-51d70a84a1a4`,
        })
    );

    rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateSceneBackground`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      overriddenErrors,
      (backgroundUuid) =>
        instanceFactory({
          type: `updateSceneBackground`,
          sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          backgroundUuid,
        })
    );
  });
}

rejectsNonObjects(
  `updateSceneBackgroundEventSchema`,
  updateSceneBackgroundEventSchema,
  `instance`,
  null,
  (nonObject) => nonObject
);

validateUpdateSceneBackgroundEventSchema(
  `updateSceneBackgroundEventSchema`,
  updateSceneBackgroundEventSchema,
  `instance`,
  null,
  (updateSceneBackgroundEvent) => updateSceneBackgroundEvent
);
