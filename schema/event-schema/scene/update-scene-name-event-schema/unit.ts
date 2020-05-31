import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { validateNameSchema } from "../../../name-schema/unit";
import { Json, updateSceneNameEventSchema } from "../../../..";

export function validateUpdateSceneNameEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateSceneNameEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `updateSceneName`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
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
        name: `Test Name`,
      })
    );

    rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateSceneName`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          name: `Test Name`,
        })
    );

    rejectsMissingProperty(
      `sceneUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateSceneName`,
        name: `Test Name`,
      })
    );

    validateUuidSchema(
      `sceneUuid`,
      schema,
      `${path}.sceneUuid`,
      overriddenErrors,
      (sceneUuid) =>
        instanceFactory({
          type: `updateSceneName`,
          sceneUuid,
          name: `Test Name`,
        })
    );

    rejectsMissingProperty(
      `name`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateSceneName`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      overriddenErrors,
      (name) =>
        instanceFactory({
          type: `updateSceneName`,
          sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          name,
        })
    );
  });
}

rejectsNonObjects(
  `updateSceneNameEventSchema`,
  updateSceneNameEventSchema,
  `instance`,
  null
);

validateUpdateSceneNameEventSchema(
  `updateSceneNameEventSchema`,
  updateSceneNameEventSchema,
  `instance`,
  null,
  (updateSceneNameEvent) => updateSceneNameEvent
);
