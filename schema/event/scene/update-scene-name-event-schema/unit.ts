import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as nameSchemaHelpers from "../../../name-schema/unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateSceneNameEventSchema } from "../../../..";

export function validateUpdateSceneNameEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (updateSceneNameEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
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
      factory({
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateSceneName`,
      (type) => ({
        type,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `sceneUuid`,
      schema,
      path,
      factory({
        type: `updateSceneName`,
        name: `Test Name`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `sceneUuid`,
      schema,
      `${path}.sceneUuid`,
      (sceneUuid) => ({
        type: `updateSceneName`,
        sceneUuid,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `name`,
      schema,
      path,
      factory({
        type: `updateSceneName`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    nameSchemaHelpers.validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      (name) => ({
        type: `updateSceneName`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name,
      })
    );
  });
}

validateUpdateSceneNameEventSchema(
  `updateSceneNameEventSchema`,
  updateSceneNameEventSchema,
  `instance`,
  (updateSceneNameEvent) => updateSceneNameEvent
);
