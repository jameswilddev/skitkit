import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../unit";
import { Json, svgSchema } from "../..";

export function validateSvgSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  factory: (svg: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(`single character`, factory(`T`), schema);

    schemaHelpers.accepts(
      `the length limit`,
      factory(`T`.repeat(1024 * 1024)),
      schema
    );

    schemaHelpers.rejects(
      `beyond the length limit`,
      factory(`T`.repeat(1024 * 1024 + 1)),
      schema,
      [`${path} does not meet maximum length of 1048576`]
    );

    schemaHelpers.rejects(`null`, factory(null), schema, [
      `${path} is not of a type(s) string`,
    ]);

    schemaHelpers.rejects(`empty strings`, factory(``), schema, [
      `${path} does not meet minimum length of 1`,
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

validateSvgSchema(`svgSchema`, svgSchema, `instance`, (svg) => svg);
