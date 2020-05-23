import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, deleteBackgroundEventSchema } from "../../../..";

export function validateDeleteBackgroundEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (deleteBackgroundEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      instanceFactory({
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
      instanceFactory({
        backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `deleteBackground`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          backgroundUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `deleteBackground`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      overriddenErrors,
      (backgroundUuid) =>
        instanceFactory({
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
