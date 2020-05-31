import * as jsonschema from "jsonschema";
import { accepts, rejects } from "../unit";
import { Json, uuidSchema } from "../..";

export function forEachInvalidUuid(
  callback: (description: string, value: string) => void
): void {
  callback(`empty strings`, ``);

  callback(`capitalized uuids`, `A366E69C-D60E-4E27-BD18-7AEA8257BCDB`);

  callback(`unhyphenated uuids`, `a366e69cd60e4e27bd187aea8257bcdb`);

  callback(`braced uuids`, `{a366e69c-d60e-4e27-bd18-7aea8257bcdb}`);

  callback(`extended uuids`, `a366e69c-d60e-4e27-bd18-7aea8257bcdbe`);

  callback(`truncated uuids`, `a366e69c-d60e-4e27-bd18-7aea8257bcd`);

  callback(
    `uuids with preceding white space`,
    ` a366e69c-d60e-4e27-bd18-7aea8257bcdb`
  );

  callback(
    `uuids with trailing white space`,
    `a366e69c-d60e-4e27-bd18-7aea8257bcdb `
  );
}

export function validateUuidSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (uuid: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory(`a366e69c-d60e-4e27-bd18-7aea8257bcdb`),
      schema
    );

    forEachInvalidUuid((description, value) => {
      rejects(
        description,
        instanceFactory(value),
        schema,
        overriddenErrors || [
          `${path} does not match pattern "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"`,
        ]
      );
    });

    rejects(
      `null`,
      instanceFactory(null),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    rejects(
      `zero`,
      instanceFactory(0),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    rejects(
      `negative zero`,
      instanceFactory(-0),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    rejects(
      `positive integers`,
      instanceFactory(326),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    rejects(
      `negative integers`,
      instanceFactory(-326),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    rejects(
      `positive decimals`,
      instanceFactory(32.6),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    rejects(
      `negative decimals`,
      instanceFactory(-32.6),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    rejects(
      `empty arrays`,
      instanceFactory([]),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    rejects(
      `empty objects`,
      instanceFactory({}),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );
  });
}

validateUuidSchema(`uuidSchema`, uuidSchema, `instance`, null, (uuid) => uuid);
