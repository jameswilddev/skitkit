import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { Json, deleteEmoteEventSchema } from "../../../..";

export function validateDeleteEmoteEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (deleteEmoteEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `deleteEmote`,
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
        emoteUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    rejectsOtherThanExpectedString(
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

    rejectsMissingProperty(
      `emoteUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `deleteEmote`,
      })
    );

    validateUuidSchema(
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

rejectsNonObjects(
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
