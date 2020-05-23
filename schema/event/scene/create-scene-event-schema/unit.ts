import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import {
  Json,
  createSceneEventSchema,
  CreateSceneEventSchema,
} from "../../../..";

export function validateCreateSceneEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (createSceneEvent: CreateSceneEventSchema) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `createSceneEvent`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      }),
      schema
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `createSceneEvent`,
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
        type: `createSceneEvent`,
        sceneUuid,
      })
    );
  });
}

validateCreateSceneEventSchema(
  `createSceneEvent`,
  createSceneEventSchema,
  `instance`,
  (createSceneEvent) => createSceneEvent
);
