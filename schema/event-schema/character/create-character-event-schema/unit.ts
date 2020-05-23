import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, createCharacterEventSchema } from "../../../..";

export function validateCreateCharacterEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  factory: (createCharacterEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `createCharacter`,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      factory({
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `createCharacter`,
      overriddenErrors,
      (type) => ({
        type,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `characterUuid`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `createCharacter`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `characterUuid`,
      schema,
      `${path}.characterUuid`,
      overriddenErrors,
      (characterUuid) => ({
        type: `createCharacter`,
        characterUuid,
      })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `createCharacterEventSchema`,
  createCharacterEventSchema,
  `instance`,
  null
);

validateCreateCharacterEventSchema(
  `createCharacterEventSchema`,
  createCharacterEventSchema,
  `instance`,
  null,
  (createCharacterEvent) => createCharacterEvent
);
