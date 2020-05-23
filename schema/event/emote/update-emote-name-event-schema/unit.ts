import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as nameSchemaHelpers from "../../../name-schema/unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, updateEmoteNameEventSchema } from "../../../..";

export function validateUpdateEmoteNameEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (updateEmoteNameEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `updateEmoteName`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      factory({
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateEmoteName`,
      (type) => ({
        type,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `emoteUuid`,
      schema,
      path,
      factory({
        type: `updateEmoteName`,
        name: `Test Name`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `emoteUuid`,
      schema,
      `${path}.emoteUuid`,
      (emoteUuid) => ({
        type: `updateEmoteName`,
        emoteUuid,
        name: `Test Name`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `name`,
      schema,
      path,
      factory({
        type: `updateEmoteName`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    nameSchemaHelpers.validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      (name) => ({
        type: `updateEmoteName`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name,
      })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `updateEmoteNameEventSchema`,
  updateEmoteNameEventSchema,
  `instance`
);

validateUpdateEmoteNameEventSchema(
  `updateEmoteNameEventSchema`,
  updateEmoteNameEventSchema,
  `instance`,
  (updateEmoteNameEvent) => updateEmoteNameEvent
);
