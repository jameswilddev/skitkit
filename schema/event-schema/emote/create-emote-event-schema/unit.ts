import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, createEmoteEventSchema } from "../../../..";

export function validateCreateEmoteEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  factory: (createEmoteEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      factory({
        type: `createEmote`,
        characterUuid: `01d58b64-ae31-43c0-ab7e-1ab1a99b7e30`,
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
        characterUuid: `01d58b64-ae31-43c0-ab7e-1ab1a99b7e30`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    schemaHelpers.rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `createEmote`,
      overriddenErrors,
      (type) =>
        factory({
          type,
          characterUuid: `01d58b64-ae31-43c0-ab7e-1ab1a99b7e30`,
          emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `characterUuid`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `createEmote`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `characterUuid`,
      schema,
      `${path}.characterUuid`,
      overriddenErrors,
      (characterUuid) =>
        factory({
          type: `createEmote`,
          characterUuid,
          emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        })
    );

    schemaHelpers.rejectsMissingProperty(
      `emoteUuid`,
      schema,
      path,
      overriddenErrors,
      factory({
        type: `createEmote`,
        characterUuid: `01d58b64-ae31-43c0-ab7e-1ab1a99b7e30`,
      })
    );

    uuidSchemaHelpers.validateUuidSchema(
      `emoteUuid`,
      schema,
      `${path}.emoteUuid`,
      overriddenErrors,
      (emoteUuid) =>
        factory({
          type: `createEmote`,
          characterUuid: `01d58b64-ae31-43c0-ab7e-1ab1a99b7e30`,
          emoteUuid,
        })
    );
  });
}

schemaHelpers.rejectsNonObjects(
  `createEmoteEventSchema`,
  createEmoteEventSchema,
  `instance`,
  null
);

validateCreateEmoteEventSchema(
  `createEmoteEventSchema`,
  createEmoteEventSchema,
  `instance`,
  null,
  (createEmoteEvent) => createEmoteEvent
);
