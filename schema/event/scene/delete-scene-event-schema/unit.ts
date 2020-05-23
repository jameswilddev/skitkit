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
        type: `deleteSceneEvent`,
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
      `deleteSceneEvent`,
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
        type: `deleteSceneEvent`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `sceneUuid`,
      schema,
      `${path}.sceneUuid`,
      (sceneUuid) => ({
        type: `deleteSceneEvent`,
        sceneUuid,
      })
    );
  });
}

validateDeleteSceneEventSchema(
  `deleteSceneEvent`,
  deleteSceneEventSchema,
  `instance`,
  (deleteSceneEvent) => deleteSceneEvent
);
