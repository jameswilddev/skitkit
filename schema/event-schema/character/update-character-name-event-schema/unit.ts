import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { validateNameSchema } from "../../../name-schema/unit";
import { Json, updateCharacterNameEventSchema } from "../../../..";

export function validateUpdateCharacterNameEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateCharacterNameEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `updateCharacterName`,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        name: `Test Name`,
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
        name: `Test Name`,
      })
    );

    rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateCharacterName`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          name: `Test Name`,
        })
    );

    rejectsMissingProperty(
      `characterUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateCharacterName`,
        name: `Test Name`,
      })
    );

    validateUuidSchema(
      `characterUuid`,
      schema,
      `${path}.characterUuid`,
      overriddenErrors,
      (characterUuid) =>
        instanceFactory({
          type: `updateCharacterName`,
          characterUuid,
          name: `Test Name`,
        })
    );

    rejectsMissingProperty(
      `name`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateCharacterName`,
        characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      overriddenErrors,
      (name) =>
        instanceFactory({
          type: `updateCharacterName`,
          characterUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          name,
        })
    );
  });
}

rejectsNonObjects(
  `updateCharacterNameEventSchema`,
  updateCharacterNameEventSchema,
  `instance`,
  null
);

validateUpdateCharacterNameEventSchema(
  `updateCharacterNameEventSchema`,
  updateCharacterNameEventSchema,
  `instance`,
  null,
  (updateCharacterNameEvent) => updateCharacterNameEvent
);
