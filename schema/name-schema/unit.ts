import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../unit";
import { Json, nameSchema } from "../..";

export function validateNameSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (name: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(`single character`, instanceFactory(`T`), schema);

    schemaHelpers.rejects(
      `single white space character`,
      instanceFactory(` `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `single character with preceding white space`,
      instanceFactory(` T`),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `single character with trailing white space`,
      instanceFactory(`T `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.accepts(`two characters`, instanceFactory(`Te`), schema);

    schemaHelpers.rejects(
      `two white space characters`,
      instanceFactory(`  `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `two characters with preceding white space`,
      instanceFactory(` Te`),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `two characters with trailing white space`,
      instanceFactory(`Te `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.accepts(`three characters`, instanceFactory(`Tes`), schema);
    schemaHelpers.accepts(
      `three characters containing white space`,
      instanceFactory(`T s`),
      schema
    );

    schemaHelpers.rejects(
      `three white space characters`,
      instanceFactory(`   `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `three characters with preceding white space`,
      instanceFactory(` Tes`),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `three characters with trailing white space`,
      instanceFactory(`Tes `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.accepts(
      `many characters`,
      instanceFactory(`Test Valid Name`),
      schema
    );

    schemaHelpers.rejects(
      `many characters with preceding white space`,
      instanceFactory(` Test Valid Name`),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `many characters with trailing white space`,
      instanceFactory(`Test Valid Name `),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.accepts(
      `the length limit`,
      instanceFactory(`T`.repeat(50)),
      schema
    );

    schemaHelpers.rejects(
      `beyond the length limit`,
      instanceFactory(`T`.repeat(51)),
      schema,
      overriddenErrors || [`${path} does not meet maximum length of 50`]
    );

    schemaHelpers.rejects(
      `null`,
      instanceFactory(null),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `empty strings`,
      instanceFactory(``),
      schema,
      overriddenErrors || [
        `${path} does not match pattern "^\\\\S(?:.*\\\\S)?$"`,
      ]
    );

    schemaHelpers.rejects(
      `zero`,
      instanceFactory(0),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `negative zero`,
      instanceFactory(-0),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `positive integers`,
      instanceFactory(326),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `negative integers`,
      instanceFactory(-326),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `positive decimals`,
      instanceFactory(32.6),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `negative decimals`,
      instanceFactory(-32.6),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `empty arrays`,
      instanceFactory([]),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    schemaHelpers.rejects(
      `empty objects`,
      instanceFactory({}),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );
  });
}

validateNameSchema(`nameSchema`, nameSchema, `instance`, null, (name) => name);
