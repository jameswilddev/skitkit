import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsNonObjects,
} from "../../../unit";
import { Json, lineCharacterStateSchema } from "../../../..";
import { validateUuidSchema } from "../../../uuid-schema/unit";

export function validateLineCharacterStateSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (lineCharacterState: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        emoteUuid: `faee5b62-7886-4957-9cfe-6bd98fdec071`,
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
      `emoteUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({})
    );

    validateUuidSchema(
      `emoteUuid`,
      schema,
      `${path}.emoteUuid`,
      overriddenErrors,
      (emoteUuid) =>
        instanceFactory({
          emoteUuid,
        })
    );
  });
}

validateLineCharacterStateSchema(
  `lineCharacterStateSchema`,
  lineCharacterStateSchema,
  `instance`,
  null,
  (lineCharacterState) => lineCharacterState
);
