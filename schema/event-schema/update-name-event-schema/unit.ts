import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  rejectsNonObjects,
} from "../../unit";
import { validateNameSchema } from "../../name-schema/unit";
import { Json, updateNameEventSchema } from "../../..";

export function validateUpdateNameEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateNameEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `updateName`,
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
        name: `Test Name`,
      })
    );

    rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateName`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          name: `Test Name`,
        })
    );

    rejectsMissingProperty(
      `name`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateName`,
      })
    );

    validateNameSchema(
      `name`,
      schema,
      `${path}.name`,
      overriddenErrors,
      (name) =>
        instanceFactory({
          type: `updateName`,
          name,
        })
    );
  });
}

rejectsNonObjects(
  `updateNameEventSchema`,
  updateNameEventSchema,
  `instance`,
  null,
  (nonObject) => nonObject
);

validateUpdateNameEventSchema(
  `updateNameEventSchema`,
  updateNameEventSchema,
  `instance`,
  null,
  (updateNameEvent) => updateNameEvent
);
