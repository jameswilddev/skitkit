import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../unit";
import { Json, uuidSchema } from "../..";

export function validateUuid(
  schema: jsonschema.Schema,
  path: string,
  factory: (uuid: Json) => Json
): void {
  describe(`uuid`, () => {
    schemaHelpers.accepts(
      `valid`,
      factory(`a366e69c-d60e-4e27-bd18-7aea8257bcdb`),
      schema
    );

    schemaHelpers.rejects(`null`, factory(null), schema, [
      `${path} is not of a type(s) string`,
    ]);

    schemaHelpers.rejects(`empty strings`, factory(``), schema, [
      `${path} does not match pattern "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"`,
    ]);

    schemaHelpers.rejects(
      `capitalized uuids`,
      factory(`A366E69C-D60E-4E27-BD18-7AEA8257BCDB`),
      schema,
      [
        `${path} does not match pattern "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"`,
      ]
    );

    schemaHelpers.rejects(
      `unhyphenated uuids`,
      factory(`a366e69cd60e4e27bd187aea8257bcdb`),
      schema,
      [
        `${path} does not match pattern "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"`,
      ]
    );

    schemaHelpers.rejects(
      `braced uuids`,
      factory(`{a366e69c-d60e-4e27-bd18-7aea8257bcdb}`),
      schema,
      [
        `${path} does not match pattern "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"`,
      ]
    );

    schemaHelpers.rejects(
      `extended uuids`,
      factory(`a366e69c-d60e-4e27-bd18-7aea8257bcdbe`),
      schema,
      [
        `${path} does not match pattern "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"`,
      ]
    );

    schemaHelpers.rejects(
      `truncated uuids`,
      factory(`a366e69c-d60e-4e27-bd18-7aea8257bcd`),
      schema,
      [
        `${path} does not match pattern "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"`,
      ]
    );

    schemaHelpers.rejects(
      `uuids with preceding white space`,
      factory(` a366e69c-d60e-4e27-bd18-7aea8257bcdb`),
      schema,
      [
        `${path} does not match pattern "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"`,
      ]
    );

    schemaHelpers.rejects(
      `uuids with trailing white space`,
      factory(`a366e69c-d60e-4e27-bd18-7aea8257bcdb `),
      schema,
      [
        `${path} does not match pattern "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"`,
      ]
    );

    schemaHelpers.rejects(`zero`, factory(0), schema, [
      `${path} is not of a type(s) string`,
    ]);

    schemaHelpers.rejects(`negative zero`, factory(-0), schema, [
      `${path} is not of a type(s) string`,
    ]);

    schemaHelpers.rejects(`positive integers`, factory(326), schema, [
      `${path} is not of a type(s) string`,
    ]);

    schemaHelpers.rejects(`negative integers`, factory(-326), schema, [
      `${path} is not of a type(s) string`,
    ]);

    schemaHelpers.rejects(`positive decimals`, factory(32.6), schema, [
      `${path} is not of a type(s) string`,
    ]);

    schemaHelpers.rejects(`negative decimals`, factory(-32.6), schema, [
      `${path} is not of a type(s) string`,
    ]);

    schemaHelpers.rejects(`empty arrays`, factory([]), schema, [
      `${path} is not of a type(s) string`,
    ]);

    schemaHelpers.rejects(`empty objects`, factory({}), schema, [
      `${path} is not of a type(s) string`,
    ]);
  });
}

validateUuid(uuidSchema, `instance`, (uuid) => uuid);
