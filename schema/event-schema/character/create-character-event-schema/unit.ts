import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { Json, createCharacterEventSchema } from "../../../..";

export function validateCreateCharacterEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (createCharacterEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `createCharacter`,
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
      `createCharacter`,
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
        type: `createCharacter`,
      })
    );

    validateUuidSchema(
      `characterUuid`,
      schema,
      `${path}.characterUuid`,
      overriddenErrors,
      (characterUuid) =>
        instanceFactory({
          type: `createCharacter`,
          characterUuid,
        })
    );
  });
}

rejectsNonObjects(
  `createCharacterEventSchema`,
  createCharacterEventSchema,
  `instance`,
  null,
  (nonObject) => nonObject
);

validateCreateCharacterEventSchema(
  `createCharacterEventSchema`,
  createCharacterEventSchema,
  `instance`,
  null,
  (createCharacterEvent) => createCharacterEvent
);
