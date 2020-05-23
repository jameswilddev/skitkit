import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, deleteCharacterEventSchema } from "../../../..";

export function validateDeleteCharacterEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (deleteCharacterEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `deleteCharacter`,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      factory({
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `deleteCharacter`,
      (type) => ({
        type,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `characterUuid`,
      schema,
      path,
      factory({
        type: `deleteCharacter`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `characterUuid`,
      schema,
      `${path}.characterUuid`,
      (characterUuid) => ({
        type: `deleteCharacter`,
        characterUuid,
      })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `deleteCharacterEventSchema`,
  deleteCharacterEventSchema,
  `instance`
);

validateDeleteCharacterEventSchema(
  `deleteCharacterEventSchema`,
  deleteCharacterEventSchema,
  `instance`,
  (deleteCharacterEvent) => deleteCharacterEvent
);
