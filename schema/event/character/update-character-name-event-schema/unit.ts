import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as nameSchemaHelpers from "../../../name-schema/unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateCharacterNameEventSchema } from "../../../..";

export function validateUpdateCharacterNameEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (updateCharacterNameEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `updateCharacterName`,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      factory({
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateCharacterName`,
      (type) => ({
        type,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `characterUuid`,
      schema,
      path,
      factory({
        type: `updateCharacterName`,
        name: `Test Name`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `characterUuid`,
      schema,
      `${path}.characterUuid`,
      (characterUuid) => ({
        type: `updateCharacterName`,
        characterUuid,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `name`,
      schema,
      path,
      factory({
        type: `updateCharacterName`,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    nameSchemaHelpers.validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      (name) => ({
        type: `updateCharacterName`,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name,
      })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `updateCharacterNameEventSchema`,
  updateCharacterNameEventSchema,
  `instance`
);

validateUpdateCharacterNameEventSchema(
  `updateCharacterNameEventSchema`,
  updateCharacterNameEventSchema,
  `instance`,
  (updateCharacterNameEvent) => updateCharacterNameEvent
);
