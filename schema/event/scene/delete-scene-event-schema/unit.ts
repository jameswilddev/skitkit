import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, deleteSceneEventSchema } from "../../../..";

export function validateDeleteSceneEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (deleteSceneEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `deleteScene`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      factory({
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `deleteScene`,
      (type) => ({
        type,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `sceneUuid`,
      schema,
      path,
      factory({
        type: `deleteScene`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `sceneUuid`,
      schema,
      `${path}.sceneUuid`,
      (sceneUuid) => ({
        type: `deleteScene`,
        sceneUuid,
      })
    );
  });
}

validateDeleteSceneEventSchema(
  `deleteSceneEventSchema`,
  deleteSceneEventSchema,
  `instance`,
  (deleteSceneEvent) => deleteSceneEvent
);
