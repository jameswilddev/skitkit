import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { Json, deleteCharacterEventSchema } from "../../../..";

export function validateDeleteCharacterEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (deleteCharacterEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `deleteCharacter`,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      }),
      schema
    );

    rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `deleteCharacter`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        })
    );

    rejectsMissingProperty(
      `characterUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `deleteCharacter`,
      })
    );

    validateUuidSchema(
      `characterUuid`,
      schema,
      `${path}.characterUuid`,
      overriddenErrors,
      (characterUuid) =>
        instanceFactory({
          type: `deleteCharacter`,
          characterUuid,
        })
    );
  });
}

rejectsNonObjects(
  `deleteCharacterEventSchema`,
  deleteCharacterEventSchema,
  `instance`,
  null
);

validateDeleteCharacterEventSchema(
  `deleteCharacterEventSchema`,
  deleteCharacterEventSchema,
  `instance`,
  null,
  (deleteCharacterEvent) => deleteCharacterEvent
);
