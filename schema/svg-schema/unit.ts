import * as jsonschema from "jsonschema";
import * as schemaHelpers from "../unit";
import { Json, svgSchema } from "../..";

export function validateSvgSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (svg: Json) => Json
): void {
  describe(description, () => {
    schemaHelpers.accepts(`single character`, instanceFactory(`T`), schema);

    schemaHelpers.accepts(
      `the length limit`,
      instanceFactory(`T`.repeat(1024 * 1024)),
      schema
    );

    schemaHelpers.rejects(
      `beyond the length limit`,
      instanceFactory(`T`.repeat(1024 * 1024 + 1)),
      schema,
      overriddenErrors || [`${path} does not meet maximum length of 1048576`]
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
      overriddenErrors || [`${path} does not meet minimum length of 1`]
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

validateSvgSchema(`svgSchema`, svgSchema, `instance`, null, (svg) => svg);
