import * as jsonschema from "jsonschema";
import { accepts, rejectsNonObjects, rejects } from "../unit";
import { validateUuidSchema, forEachInvalidUuid } from "../uuid-schema/unit";
import { Json, uuidUuidMapSchema } from "../..";

export function validateUuidUuidMapSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (uuidUuidMap: Json) => Json
): void {
  describe(description, () => {
    accepts(`valid empty`, instanceFactory({}), schema);

    accepts(
      `valid with one`,
      instanceFactory({
        "930c204f-28b8-4e19-9b57-4d381fc82107": `0eedaaf6-3273-41df-ac10-0b39aa20ca32`,
      }),
      schema
    );

    accepts(
      `valid with two`,
      instanceFactory({
        "930c204f-28b8-4e19-9b57-4d381fc82107": `0eedaaf6-3273-41df-ac10-0b39aa20ca32`,
        "b3c27180-f8f9-4bbf-94a3-b50df6056114": `d982f79e-c16e-4224-85d9-b93946257052`,
      }),
      schema
    );

    accepts(
      `valid with three`,
      instanceFactory({
        "930c204f-28b8-4e19-9b57-4d381fc82107": `0eedaaf6-3273-41df-ac10-0b39aa20ca32`,
        "b3c27180-f8f9-4bbf-94a3-b50df6056114": `d982f79e-c16e-4224-85d9-b93946257052`,
        "6afb0c21-c2e2-414e-a40d-c2fd116f82c7": `4ce28459-6d17-4f33-b63d-3de7969a84cb`,
      }),
      schema
    );

    rejectsNonObjects(
      `non-object`,
      schema,
      path,
      overriddenErrors,
      instanceFactory
    );

    forEachInvalidUuid((description, value) => {
      rejects(
        `key ${description}`,
        instanceFactory({
          "930c204f-28b8-4e19-9b57-4d381fc82107": `0eedaaf6-3273-41df-ac10-0b39aa20ca32`,
          [value]: `d982f79e-c16e-4224-85d9-b93946257052`,
          "6afb0c21-c2e2-414e-a40d-c2fd116f82c7": `4ce28459-6d17-4f33-b63d-3de7969a84cb`,
        }),
        schema,
        overriddenErrors || [
          `${path} additionalProperty "${value}" exists in instance when not allowed`,
        ]
      );
    });

    validateUuidSchema(
      `value`,
      schema,
      `${path}.b3c27180-f8f9-4bbf-94a3-b50df6056114`,
      overriddenErrors,
      (uuid) =>
        instanceFactory({
          "930c204f-28b8-4e19-9b57-4d381fc82107": `0eedaaf6-3273-41df-ac10-0b39aa20ca32`,
          "b3c27180-f8f9-4bbf-94a3-b50df6056114": uuid,
          "6afb0c21-c2e2-414e-a40d-c2fd116f82c7": `4ce28459-6d17-4f33-b63d-3de7969a84cb`,
        })
    );
  });
}

validateUuidUuidMapSchema(
  `uuidUuidMapSchema`,
  uuidUuidMapSchema,
  `instance`,
  null,
  (uuidUuidMap) => uuidUuidMap
);
