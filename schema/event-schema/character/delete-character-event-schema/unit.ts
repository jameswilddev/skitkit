import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, deleteCharacterEventSchema } from "../../../..";

export function validateDeleteCharacterEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (deleteCharacterEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      instanceFactory({
        type: `deleteCharacter`,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `deleteCharacter`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `characterUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `deleteCharacter`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `characterUuid`,
      schema,
      `${path}.characterUuid`,
      overriddenErrors,
      (characterUuid) =>
        instanceFactory({
          type: `deleteCharacter`,
          characterUuid,
        })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `deleteCharacterEventSchema`,
  deleteCharacterEventSchema,
  `instance`,
  null
);

validateDeleteCharacterEventSchema(
  `deleteCharacterEventSchema`,
  deleteCharacterEventSchema,
  `instance`,
  null,
  (deleteCharacterEvent) => deleteCharacterEvent
);
