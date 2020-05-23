import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import {
  Json,
  deleteSceneEventSchema,
  DeleteSceneEventSchema,
} from "../../../..";

export function validateDeleteSceneEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (deleteSceneEvent: DeleteSceneEventSchema) => Json
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
