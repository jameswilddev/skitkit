import * as jsonschema from "jsonschema";
import { accepts, rejectsMissingProperty, rejectsNonObjects } from "../../unit";
import { Json, lineStateSchema } from "../../..";
import {
  validateUuidSchema,
  validateUuidMapSchema,
} from "../../uuid-schema/unit";
import { validateTextSchema } from "../../text-schema/unit";
import { validateLineCharacterStateSchema } from "./line-character-state-schema/unit";

export function validateLineStateSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (lineState: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        sceneUuid: `1f44044f-7098-4248-8687-bed8d4901bba`,
        text: `Test Text`,
        characters: {
          "faee5b62-7886-4957-9cfe-6bd98fdec071": {
            emoteUuid: `d167343e-a4a9-42bc-9ba9-01824ad82406`,
          },
          "04f4adef-eb24-4a52-a8e6-4cd431dadc41": {
            emoteUuid: `aabd99a5-4776-4741-a8b8-20e6448e63e0`,
          },
          "81061265-b194-4a1c-aa3a-253981d18805": {
            emoteUuid: `898acbb1-6eed-4a4d-a262-0ec8b25d0f21`,
          },
        },
      }),
      schema
    );

    rejectsNonObjects(
      `non-object`,
      schema,
      path,
      overriddenErrors,
      (nonObject) => instanceFactory(nonObject)
    );

    rejectsMissingProperty(
      `sceneUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        text: `Test Text`,
        characters: {
          "faee5b62-7886-4957-9cfe-6bd98fdec071": {
            emoteUuid: `d167343e-a4a9-42bc-9ba9-01824ad82406`,
          },
          "04f4adef-eb24-4a52-a8e6-4cd431dadc41": {
            emoteUuid: `aabd99a5-4776-4741-a8b8-20e6448e63e0`,
          },
          "81061265-b194-4a1c-aa3a-253981d18805": {
            emoteUuid: `898acbb1-6eed-4a4d-a262-0ec8b25d0f21`,
          },
        },
      })
    );

    validateUuidSchema(
      `sceneUuid`,
      schema,
      `${path}.sceneUuid`,
      overriddenErrors,
      (sceneUuid) =>
        instanceFactory({
          sceneUuid,
          text: `Test Text`,
          characters: {
            "faee5b62-7886-4957-9cfe-6bd98fdec071": {
              emoteUuid: `d167343e-a4a9-42bc-9ba9-01824ad82406`,
            },
            "04f4adef-eb24-4a52-a8e6-4cd431dadc41": {
              emoteUuid: `aabd99a5-4776-4741-a8b8-20e6448e63e0`,
            },
            "81061265-b194-4a1c-aa3a-253981d18805": {
              emoteUuid: `898acbb1-6eed-4a4d-a262-0ec8b25d0f21`,
            },
          },
        })
    );

    rejectsMissingProperty(
      `text`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        sceneUuid: `1f44044f-7098-4248-8687-bed8d4901bba`,
        characters: {
          "faee5b62-7886-4957-9cfe-6bd98fdec071": {
            emoteUuid: `d167343e-a4a9-42bc-9ba9-01824ad82406`,
          },
          "04f4adef-eb24-4a52-a8e6-4cd431dadc41": {
            emoteUuid: `aabd99a5-4776-4741-a8b8-20e6448e63e0`,
          },
          "81061265-b194-4a1c-aa3a-253981d18805": {
            emoteUuid: `898acbb1-6eed-4a4d-a262-0ec8b25d0f21`,
          },
        },
      })
    );

    validateTextSchema(
      `text`,
      schema,
      `${path}.text`,
      overriddenErrors,
      (text) =>
        instanceFactory({
          sceneUuid: `1f44044f-7098-4248-8687-bed8d4901bba`,
          text,
          characters: {
            "faee5b62-7886-4957-9cfe-6bd98fdec071": {
              emoteUuid: `d167343e-a4a9-42bc-9ba9-01824ad82406`,
            },
            "04f4adef-eb24-4a52-a8e6-4cd431dadc41": {
              emoteUuid: `aabd99a5-4776-4741-a8b8-20e6448e63e0`,
            },
            "81061265-b194-4a1c-aa3a-253981d18805": {
              emoteUuid: `898acbb1-6eed-4a4d-a262-0ec8b25d0f21`,
            },
          },
        })
    );

    rejectsMissingProperty(
      `characters`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        sceneUuid: `1f44044f-7098-4248-8687-bed8d4901bba`,
        text: `Test Text`,
      })
    );

    validateUuidMapSchema(
      `characters`,
      schema,
      `${path}.characters`,
      overriddenErrors,
      (characters) =>
        instanceFactory({
          sceneUuid: `1f44044f-7098-4248-8687-bed8d4901bba`,
          text: `Test Text`,
          characters,
        }),
      { emoteUuid: `d167343e-a4a9-42bc-9ba9-01824ad82406` },
      { emoteUuid: `aabd99a5-4776-4741-a8b8-20e6448e63e0` },
      { emoteUuid: `898acbb1-6eed-4a4d-a262-0ec8b25d0f21` }
    );

    validateLineCharacterStateSchema(
      `value`,
      schema,
      `${path}.characters["04f4adef-eb24-4a52-a8e6-4cd431dadc41"]`,
      overriddenErrors,
      (lineCharacterState) =>
        instanceFactory({
          sceneUuid: `1f44044f-7098-4248-8687-bed8d4901bba`,
          text: `Test Text`,
          characters: {
            "faee5b62-7886-4957-9cfe-6bd98fdec071": {
              emoteUuid: `d167343e-a4a9-42bc-9ba9-01824ad82406`,
            },
            "04f4adef-eb24-4a52-a8e6-4cd431dadc41": lineCharacterState,
            "81061265-b194-4a1c-aa3a-253981d18805": {
              emoteUuid: `898acbb1-6eed-4a4d-a262-0ec8b25d0f21`,
            },
          },
        })
    );
  });
}

validateLineStateSchema(
  `lineStateSchema`,
  lineStateSchema,
  `instance`,
  null,
  (lineState) => lineState
);
