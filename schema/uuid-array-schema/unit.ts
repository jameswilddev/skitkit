import * as jsonschema from "jsonschema";
import { accepts, rejects, rejectsNonArrays } from "../unit";
import { validateUuidSchema } from "../uuid-schema/unit";
import { Json, uuidArraySchema } from "../..";

export function validateUuidArraySchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (uuidUuidMap: Json) => Json
): void {
  describe(description, () => {
    rejects(
      `empty`,
      instanceFactory([]),
      schema,
      overriddenErrors || [`${path} does not meet minimum length of 1`]
    );

    accepts(
      `valid with one`,
      instanceFactory([`930c204f-28b8-4e19-9b57-4d381fc82107`]),
      schema
    );

    accepts(
      `valid with two`,
      instanceFactory([
        `0eedaaf6-3273-41df-ac10-0b39aa20ca32`,
        `d982f79e-c16e-4224-85d9-b93946257052`,
      ]),
      schema
    );

    accepts(
      `valid with three`,
      instanceFactory([
        `0eedaaf6-3273-41df-ac10-0b39aa20ca32`,
        `d982f79e-c16e-4224-85d9-b93946257052`,
        `4ce28459-6d17-4f33-b63d-3de7969a84cb`,
      ]),
      schema
    );

    rejects(
      `non-unique`,
      instanceFactory([
        `0eedaaf6-3273-41df-ac10-0b39aa20ca32`,
        `d982f79e-c16e-4224-85d9-b93946257052`,
        `0eedaaf6-3273-41df-ac10-0b39aa20ca32`,
      ]),
      schema,
      overriddenErrors || [`${path} contains duplicate item`]
    );

    rejectsNonArrays(
      `non-array`,
      schema,
      path,
      overriddenErrors,
      instanceFactory
    );

    validateUuidSchema(
      `value`,
      schema,
      `${path}[1]`,
      overriddenErrors,
      (uuid) =>
        instanceFactory([
          `0eedaaf6-3273-41df-ac10-0b39aa20ca32`,
          uuid,
          `4ce28459-6d17-4f33-b63d-3de7969a84cb`,
        ])
    );
  });
}

validateUuidArraySchema(
  `uuidArraySchema`,
  uuidArraySchema,
  `instance`,
  null,
  (uuidArray) => uuidArray
);
