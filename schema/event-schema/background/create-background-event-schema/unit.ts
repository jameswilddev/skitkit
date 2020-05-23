import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, createBackgroundEventSchema } from "../../../..";

export function validateCreateBackgroundEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (createBackgroundEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      instanceFactory({
        type: `createBackground`,
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
      `createBackground`,
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
        type: `createBackground`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      overriddenErrors,
      (backgroundUuid) =>
        instanceFactory({
          type: `createBackground`,
          backgroundUuid,
        })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `createBackgroundEventSchema`,
  createBackgroundEventSchema,
  `instance`,
  null
);

validateCreateBackgroundEventSchema(
  `createBackgroundEventSchema`,
  createBackgroundEventSchema,
  `instance`,
  null,
  (createBackgroundEvent) => createBackgroundEvent
);
