import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { Json, createEmoteEventSchema } from "../../../..";

export function validateCreateEmoteEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (createEmoteEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `createEmote`,
        characterUuid: `01d58b64-ae31-43c0-ab7e-1ab1a99b7e30`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      }),
      schema
    );

    rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        characterUuid: `01d58b64-ae31-43c0-ab7e-1ab1a99b7e30`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    rejectsOtherThanExpectedString(
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

    rejectsMissingProperty(
      `characterUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `createEmote`,
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    validateUuidSchema(
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

    rejectsMissingProperty(
      `emoteUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `createEmote`,
        characterUuid: `01d58b64-ae31-43c0-ab7e-1ab1a99b7e30`,
      })
    );

    validateUuidSchema(
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

rejectsNonObjects(
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
