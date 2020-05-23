import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as nameSchemaHelpers from "../../../name-schema/unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateBackgroundNameEventSchema } from "../../../..";

export function validateUpdateBackgroundNameEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  factory: (updateBackgroundNameEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `updateBackgroundName`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
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
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateBackgroundName`,
      overriddenErrors,
      (type) =>
        factory({
          type,
          backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          name: `Test Name`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `updateBackgroundName`,
        name: `Test Name`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      overriddenErrors,
      (backgroundUuid) =>
        factory({
          type: `updateBackgroundName`,
          backgroundUuid,
          name: `Test Name`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `name`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `updateBackgroundName`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    nameSchemaHelpers.validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      overriddenErrors,
      (name) =>
        factory({
          type: `updateBackgroundName`,
          backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          name,
        })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `updateBackgroundNameEventSchema`,
  updateBackgroundNameEventSchema,
  `instance`,
  null
);

validateUpdateBackgroundNameEventSchema(
  `updateBackgroundNameEventSchema`,
  updateBackgroundNameEventSchema,
  `instance`,
  null,
  (updateBackgroundNameEvent) => updateBackgroundNameEvent
);
