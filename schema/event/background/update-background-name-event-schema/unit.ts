import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as nameSchemaHelpers from "../../../name-schema/unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateBackgroundNameEventSchema } from "../../../..";

export function validateUpdateBackgroundNameEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
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
      (type) => ({
        type,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      factory({
        type: `updateBackgroundName`,
        name: `Test Name`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      (backgroundUuid) => ({
        type: `updateBackgroundName`,
        backgroundUuid,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `name`,
      schema,
      path,
      factory({
        type: `updateBackgroundName`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    nameSchemaHelpers.validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      (name) => ({
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
  `instance`
);

validateUpdateBackgroundNameEventSchema(
  `updateBackgroundNameEventSchema`,
  updateBackgroundNameEventSchema,
  `instance`,
  (updateBackgroundNameEvent) => updateBackgroundNameEvent
);
