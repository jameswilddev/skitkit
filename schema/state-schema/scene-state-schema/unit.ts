import * as jsonschema from "jsonschema";
import { accepts, rejectsMissingProperty, rejectsNonObjects } from "../../unit";
import { validateNameSchema } from "../../name-schema/unit";
import { Json, sceneStateSchema } from "../../..";
import { validateUuidSchema } from "../../uuid-schema/unit";
import { validateUuidArraySchema } from "../../uuid-array-schema/unit";

export function validateSceneStateSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (sceneState: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        name: `Test Name`,
        backgroundUuid: `9ecc9f98-18b1-4daf-a469-ad35fc74f29c`,
        lineUuids: [
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
        backgroundUuid: `9ecc9f98-18b1-4daf-a469-ad35fc74f29c`,
        lineUuids: [
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
          backgroundUuid: `9ecc9f98-18b1-4daf-a469-ad35fc74f29c`,
          lineUuids: [
            `faee5b62-7886-4957-9cfe-6bd98fdec071`,
            `04f4adef-eb24-4a52-a8e6-4cd431dadc41`,
            `81061265-b194-4a1c-aa3a-253981d18805`,
          ],
        })
    );

    rejectsMissingProperty(
      `backgroundUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        name: `Test Name`,
        lineUuids: [
          `faee5b62-7886-4957-9cfe-6bd98fdec071`,
          `04f4adef-eb24-4a52-a8e6-4cd431dadc41`,
          `81061265-b194-4a1c-aa3a-253981d18805`,
        ],
      })
    );

    validateUuidSchema(
      `backgroundUuid`,
      schema,
      `${path}.backgroundUuid`,
      overriddenErrors,
      (backgroundUuid) =>
        instanceFactory({
          name: `Test Name`,
          backgroundUuid,
          lineUuids: [
            `faee5b62-7886-4957-9cfe-6bd98fdec071`,
            `04f4adef-eb24-4a52-a8e6-4cd431dadc41`,
            `81061265-b194-4a1c-aa3a-253981d18805`,
          ],
        })
    );

    rejectsMissingProperty(
      `lineUuids`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        name: `Test Name`,
        backgroundUuid: `9ecc9f98-18b1-4daf-a469-ad35fc74f29c`,
      })
    );

    validateUuidArraySchema(
      `lineUuids`,
      schema,
      `${path}.lineUuids`,
      overriddenErrors,
      (lineUuids) =>
        instanceFactory({
          name: `Test Name`,
          backgroundUuid: `9ecc9f98-18b1-4daf-a469-ad35fc74f29c`,
          lineUuids,
        })
    );
  });
}

rejectsNonObjects(
  `sceneStateSchema`,
  sceneStateSchema,
  `instance`,
  null,
  (nonObject) => nonObject
);

validateSceneStateSchema(
  `sceneStateSchema`,
  sceneStateSchema,
  `instance`,
  null,
  (sceneState) => sceneState
);
