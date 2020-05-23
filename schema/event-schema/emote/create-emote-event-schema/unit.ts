import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../../../unit";
import * as uuidSchemaHelpers from "../../../uuid-schema/unit";
import { Json, createEmoteEventSchema } from "../../../..";

export function validateCreateEmoteEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (createEmoteEvent: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(
      `valid`,
      instanceFactory({
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
      instanceFactory({
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
        instanceFactory({
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
      instanceFactory({
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
        instanceFactory({
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
      instanceFactory({
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
        instanceFactory({
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
