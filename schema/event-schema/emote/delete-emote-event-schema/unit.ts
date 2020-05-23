import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, deleteEmoteEventSchema } from "../../../..";

export function validateDeleteEmoteEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (deleteEmoteEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      instanceFactory({
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
      instanceFactory({
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `deleteEmote`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `emoteUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `deleteEmote`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `emoteUuid`,
      schema,
      `${path}.emoteUuid`,
      overriddenErrors,
      (emoteUuid) =>
        instanceFactory({
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
