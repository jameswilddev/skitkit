import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { Json, updateLineCharacterEmoteEventSchema } from "../../../..";

export function validateUpdateLineCharacterEmoteEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateLineCharacterEmoteEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `updateLineCharacterEmote`,
        lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        emoteUuid: `abb928c7-51a7-4138-a3b8-1ad78a1773d8`,
      }),
      schema
    );

    rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        emoteUuid: `abb928c7-51a7-4138-a3b8-1ad78a1773d8`,
      })
    );

    rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateLineCharacterEmote`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          emoteUuid: `abb928c7-51a7-4138-a3b8-1ad78a1773d8`,
        })
    );

    rejectsMissingProperty(
      `lineUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateLineCharacterEmote`,
        emoteUuid: `abb928c7-51a7-4138-a3b8-1ad78a1773d8`,
      })
    );

    validateUuidSchema(
      `lineUuid`,
      schema,
      `${path}.lineUuid`,
      overriddenErrors,
      (lineUuid) =>
        instanceFactory({
          type: `updateLineCharacterEmote`,
          lineUuid,
          emoteUuid: `abb928c7-51a7-4138-a3b8-1ad78a1773d8`,
        })
    );

    rejectsMissingProperty(
      `emoteUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateLineCharacterEmote`,
        lineUuid: `0062cfb9-92fe-45a2-bb71-4fb4290c3882`,
      })
    );

    validateUuidSchema(
      `emoteUuid`,
      schema,
      `${path}.emoteUuid`,
      overriddenErrors,
      (emoteUuid) =>
        instanceFactory({
          type: `updateLineCharacterEmote`,
          lineUuid: `0062cfb9-92fe-45a2-bb71-4fb4290c3882`,
          emoteUuid,
        })
    );
  });
}

rejectsNonObjects(
  `updateLineCharacterEmoteEventSchema`,
  updateLineCharacterEmoteEventSchema,
  `instance`,
  null,
  (nonObject) => nonObject
);

validateUpdateLineCharacterEmoteEventSchema(
  `updateLineCharacterEmoteEventSchema`,
  updateLineCharacterEmoteEventSchema,
  `instance`,
  null,
  (updateLineCharacterEmoteEvent) => updateLineCharacterEmoteEvent
);
