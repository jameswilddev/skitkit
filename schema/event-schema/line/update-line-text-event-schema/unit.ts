import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateLineTextEventSchema } from "../../../..";

export function validateUpdateLineTextEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateLineTextEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      instanceFactory({
        type: `updateLineText`,
        lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        text: `Test Text`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        text: `Test Text`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateLineText`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          text: `Test Text`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `lineUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateLineText`,
        text: `Test Text`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `lineUuid`,
      schema,
      `${path}.lineUuid`,
      overriddenErrors,
      (lineUuid) =>
        instanceFactory({
          type: `updateLineText`,
          lineUuid,
          text: `Test Text`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `text`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateLineText`,
        lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.validateUnpaddedString(
      `text`,
      schema,
      `${path}.text`,
      1000,
      overriddenErrors,
      (text) =>
        instanceFactory({
          type: `updateLineText`,
          lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          text,
        })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `updateLineTextEventSchema`,
  updateLineTextEventSchema,
  `instance`,
  null
);

validateUpdateLineTextEventSchema(
  `updateLineTextEventSchema`,
  updateLineTextEventSchema,
  `instance`,
  null,
  (updateLineTextEvent) => updateLineTextEvent
);
