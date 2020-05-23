import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../unit";
import { Json, nameSchema } from "../..";

export function validateNameSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (name: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(`single character`, factory(`T`), schema);

    schemaHelpers.rejects(
      `single white space character`,
      factory(` `),
      schema,
      [`${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`]
    );

    schemaHelpers.rejects(
      `single character with preceding white space`,
      factory(` T`),
      schema,
      [`${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`]
    );

    schemaHelpers.rejects(
      `single character with trailing white space`,
      factory(`T `),
      schema,
      [`${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`]
    );

    schemaHelpers.accepts(`two characters`, factory(`Te`), schema);

    schemaHelpers.rejects(`two white space characters`, factory(`  `), schema, [
      `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
    ]);

    schemaHelpers.rejects(
      `two characters with preceding white space`,
      factory(` Te`),
      schema,
      [`${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`]
    );

    schemaHelpers.rejects(
      `two characters with trailing white space`,
      factory(`Te `),
      schema,
      [`${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`]
    );

    schemaHelpers.accepts(`three characters`, factory(`Tes`), schema);
    schemaHelpers.accepts(
      `three characters containing white space`,
      factory(`T s`),
      schema
    );

    schemaHelpers.rejects(
      `three white space characters`,
      factory(`   `),
      schema,
      [`${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`]
    );

    schemaHelpers.rejects(
      `three characters with preceding white space`,
      factory(` Tes`),
      schema,
      [`${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`]
    );

    schemaHelpers.rejects(
      `three characters with trailing white space`,
      factory(`Tes `),
      schema,
      [`${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`]
    );

    schemaHelpers.accepts(
      `many characters`,
      factory(`Test Valid Name`),
      schema
    );

    schemaHelpers.rejects(
      `many characters with preceding white space`,
      factory(` Test Valid Name`),
      schema,
      [`${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`]
    );

    schemaHelpers.rejects(
      `many characters with trailing white space`,
      factory(`Test Valid Name `),
      schema,
      [`${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`]
    );

    schemaHelpers.rejects(`null`, factory(null), schema, [
      `${path} is not of a type(s) string`,
    ]);

    schemaHelpers.rejects(`empty strings`, factory(``), schema, [
      `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
    ]);

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

validateNameSchema(`nameSchema`, nameSchema, `instance`, (name) => name);
