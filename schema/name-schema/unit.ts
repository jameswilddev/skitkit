import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../unit";
import { Json, nameSchema } from "../..";

export function validateNameSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  factory: (name: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(`single character`, factory(`T`), schema);

    schemaHelpers.rejects(
      `single white space character`,
      factory(` `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `single character with preceding white space`,
      factory(` T`),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `single character with trailing white space`,
      factory(`T `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.accepts(`two characters`, factory(`Te`), schema);

    schemaHelpers.rejects(
      `two white space characters`,
      factory(`  `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `two characters with preceding white space`,
      factory(` Te`),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `two characters with trailing white space`,
      factory(`Te `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
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
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `three characters with preceding white space`,
      factory(` Tes`),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `three characters with trailing white space`,
      factory(`Tes `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
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
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `many characters with trailing white space`,
      factory(`Test Valid Name `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.accepts(`the length limit`, factory(`T`.repeat(50)), schema);

    schemaHelpers.rejects(
      `beyond the length limit`,
      factory(`T`.repeat(51)),
      schema,
      overriddenErrors || [`${path} does not meet maximum length of 50`]
    );

    schemaHelpers.rejects(
      `null`,
      factory(null),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `empty strings`,
      factory(``),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `zero`,
      factory(0),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `negative zero`,
      factory(-0),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `positive integers`,
      factory(326),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `negative integers`,
      factory(-326),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `positive decimals`,
      factory(32.6),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `negative decimals`,
      factory(-32.6),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `empty arrays`,
      factory([]),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `empty objects`,
      factory({}),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );
  });
}

validateNameSchema(`nameSchema`, nameSchema, `instance`, null, (name) => name);
