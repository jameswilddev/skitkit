import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as nameSchemaHelpers from "../../../name-schema/unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateSceneNameEventSchema } from "../../../..";

export function validateUpdateSceneNameEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateSceneNameEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      instanceFactory({
        type: `updateSceneName`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
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

    schemaHelpers.rejectsMissingProperty(
      `sceneUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateSceneName`,
        name: `Test Name`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
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

    schemaHelpers.rejectsMissingProperty(
      `name`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateSceneName`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    nameSchemaHelpers.validateNameSchema(
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

schemaHelpers.rejectsNonObjects(
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
