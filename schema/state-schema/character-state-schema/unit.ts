import * as jsonschema from "jsonschema";
import { accepts, rejectsMissingProperty, rejectsNonObjects } from "../../unit";
import { validateNameSchema } from "../../name-schema/unit";
import { Json, characterStateSchema } from "../../..";
import { validateUuidArraySchema } from "../../uuid-array-schema/unit";

export function validateCharacterStateSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (characterState: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        name: `Test Name`,
        emoteUuids: [
          `faee5b62-7886-4957-9cfe-6bd98fdec071`,
          `04f4adef-eb24-4a52-a8e6-4cd431dadc41`,
          `81061265-b194-4a1c-aa3a-253981d18805`,
        ],
      }),
      schema
    );

    rejectsMissingProperty(
      `name`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        emoteUuids: [
          `faee5b62-7886-4957-9cfe-6bd98fdec071`,
          `04f4adef-eb24-4a52-a8e6-4cd431dadc41`,
          `81061265-b194-4a1c-aa3a-253981d18805`,
        ],
      })
    );

    validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      overriddenErrors,
      (name) =>
        instanceFactory({
          name,
          emoteUuids: [
            `faee5b62-7886-4957-9cfe-6bd98fdec071`,
            `04f4adef-eb24-4a52-a8e6-4cd431dadc41`,
            `81061265-b194-4a1c-aa3a-253981d18805`,
          ],
        })
    );

    rejectsMissingProperty(
      `emoteUuids`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        name: `Test Name`,
      })
    );

    validateUuidArraySchema(
      `emoteUuids`,
      schema,
      `${path}.emoteUuids`,
      overriddenErrors,
      (emoteUuids) =>
        instanceFactory({
          name: `Test Name`,
          emoteUuids,
        })
    );
  });
}

rejectsNonObjects(
  `characterStateSchema`,
  characterStateSchema,
  `instance`,
  null,
  (nonObject) => nonObject
);

validateCharacterStateSchema(
  `characterStateSchema`,
  characterStateSchema,
  `instance`,
  null,
  (characterState) => characterState
);
