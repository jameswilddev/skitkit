import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as nameSchemaHelpers from "../../../name-schema/unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateCharacterNameEventSchema } from "../../../..";

export function validateUpdateCharacterNameEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
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
      overriddenErrors,
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
      overriddenErrors,
      (type) =>
        factory({
          type,
          characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          name: `Test Name`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `characterUuid`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `updateCharacterName`,
        name: `Test Name`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `characterUuid`,
      schema,
      `${path}.characterUuid`,
      overriddenErrors,
      (characterUuid) =>
        factory({
          type: `updateCharacterName`,
          characterUuid,
          name: `Test Name`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `name`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `updateCharacterName`,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    nameSchemaHelpers.validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      overriddenErrors,
      (name) =>
        factory({
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
  `instance`,
  null
);

validateUpdateCharacterNameEventSchema(
  `updateCharacterNameEventSchema`,
  updateCharacterNameEventSchema,
  `instance`,
  null,
  (updateCharacterNameEvent) => updateCharacterNameEvent
);
