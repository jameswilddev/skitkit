import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, createBackgroundEventSchema } from "../../../..";

export function validateCreateBackgroundEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (createBackgroundEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `createBackground`,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      factory({
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `createBackground`,
      (type) => ({
        type,
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      factory({
        type: `createBackground`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      (backgroundUuid) => ({
        type: `createBackground`,
        backgroundUuid,
      })
    );
  });
}

validateCreateBackgroundEventSchema(
  `createBackgroundEventSchema`,
  createBackgroundEventSchema,
  `instance`,
  (createBackgroundEvent) => createBackgroundEvent
);
