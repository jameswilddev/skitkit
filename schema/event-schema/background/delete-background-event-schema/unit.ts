import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, deleteBackgroundEventSchema } from "../../../..";

export function validateDeleteBackgroundEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  factory: (deleteBackgroundEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `deleteBackground`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
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
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `deleteBackground`,
      overriddenErrors,
      (type) => ({
        type,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `deleteBackground`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      overriddenErrors,
      (backgroundUuid) => ({
        type: `deleteBackground`,
        backgroundUuid,
      })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `deleteBackgroundEventSchema`,
  deleteBackgroundEventSchema,
  `instance`,
  null
);

validateDeleteBackgroundEventSchema(
  `deleteBackgroundEventSchema`,
  deleteBackgroundEventSchema,
  `instance`,
  null,
  (deleteBackgroundEvent) => deleteBackgroundEvent
);
