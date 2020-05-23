import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, deleteEmoteEventSchema } from "../../../..";

export function validateDeleteEmoteEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
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
      factory({
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `deleteEmote`,
      (type) => ({
        type,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsMissingProperty(
      `emoteUuid`,
      schema,
      path,
      factory({
        type: `deleteEmote`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `emoteUuid`,
      schema,
      `${path}.emoteUuid`,
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
  `instance`
);

validateDeleteEmoteEventSchema(
  `deleteEmoteEventSchema`,
  deleteEmoteEventSchema,
  `instance`,
  (deleteEmoteEvent) => deleteEmoteEvent
);
