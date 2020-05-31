import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { Json, deleteSceneEventSchema } from "../../../..";

export function validateDeleteSceneEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (deleteSceneEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `deleteScene`,
        sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
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
      })
    );

    rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `deleteScene`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          sceneUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        })
    );

    rejectsMissingProperty(
      `sceneUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `deleteScene`,
      })
    );

    validateUuidSchema(
      `sceneUuid`,
      schema,
      `${path}.sceneUuid`,
      overriddenErrors,
      (sceneUuid) =>
        instanceFactory({
          type: `deleteScene`,
          sceneUuid,
        })
    );
  });
}

rejectsNonObjects(
  `deleteSceneEventSchema`,
  deleteSceneEventSchema,
  `instance`,
  null
);

validateDeleteSceneEventSchema(
  `deleteSceneEventSchema`,
  deleteSceneEventSchema,
  `instance`,
  null,
  (deleteSceneEvent) => deleteSceneEvent
);
