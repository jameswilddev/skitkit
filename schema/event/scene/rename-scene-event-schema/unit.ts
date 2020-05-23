import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import {
  Json,
  renameSceneEventSchema,
  RenameSceneEventSchema,
} from "../../../..";

export function validateRenameSceneEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (renameSceneEvent: RenameSceneEventSchema) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `renameSceneEvent`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      }),
      schema
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `renameSceneEvent`,
      (type) => ({
        type,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `sceneUuid`,
      schema,
      `${path}.sceneUuid`,
      (sceneUuid) => ({
        type: `renameSceneEvent`,
        sceneUuid,
        name: `Test Name`,
      })
    );
  });
}

validateRenameSceneEventSchema(
  `renameSceneEvent`,
  renameSceneEventSchema,
  `instance`,
  (renameSceneEvent) => renameSceneEvent
);
