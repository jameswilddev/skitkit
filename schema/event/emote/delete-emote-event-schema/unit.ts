import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, deleteEmoteEventSchema } from "../../../..";

export function validateDeleteEmoteEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  factory: (deleteEmoteEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `deleteEmote`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      }),
      schema
    );

    schemaHelpers.rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      factory({
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `deleteEmote`,
      overriddenErrors,
      (type) => ({
        type,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `emoteUuid`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `deleteEmote`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `emoteUuid`,
      schema,
      `${path}.emoteUuid`,
      overriddenErrors,
      (emoteUuid) => ({
        type: `deleteEmote`,
        emoteUuid,
      })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `deleteEmoteEventSchema`,
  deleteEmoteEventSchema,
  `instance`,
  null
);

validateDeleteEmoteEventSchema(
  `deleteEmoteEventSchema`,
  deleteEmoteEventSchema,
  `instance`,
  null,
  (deleteEmoteEvent) => deleteEmoteEvent
);
