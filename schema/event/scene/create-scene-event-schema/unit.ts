import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, createSceneEventSchema } from "../../../..";

export function validateCreateSceneEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (createSceneEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `createScene`,
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
      `createScene`,
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
        type: `createScene`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `sceneUuid`,
      schema,
      `${path}.sceneUuid`,
      (sceneUuid) => ({
        type: `createScene`,
        sceneUuid,
      })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `createSceneEventSchema`,
  createSceneEventSchema,
  `instance`
);

validateCreateSceneEventSchema(
  `createSceneEventSchema`,
  createSceneEventSchema,
  `instance`,
  (createSceneEvent) => createSceneEvent
);
