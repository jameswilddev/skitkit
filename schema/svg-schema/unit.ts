import * as jsonschema from "jsonschema";
import { accepts, rejects } from "../unit";
import { Json, svgSchema } from "../..";

export function validateSvgSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (svg: Json) => Json
): void {
  describe(description, () => {
    accepts(`single character`, instanceFactory(`T`), schema);

    accepts(
      `the length limit`,
      instanceFactory(`T`.repeat(1024 * 1024)),
      schema
    );

    rejects(
      `beyond the length limit`,
      instanceFactory(`T`.repeat(1024 * 1024 + 1)),
      schema,
      overriddenErrors || [`${path} does not meet maximum length of 1048576`]
    );

    rejects(
      `null`,
      instanceFactory(null),
      schema,
      overriddenErrors || [`${path} is not of a type(s) string`]
    );

    rejects(
      `empty strings`,
      instanceFactory(``),
      schema,
      overriddenErrors || [`${path} does not meet minimum length of 1`]
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

validateSvgSchema(`svgSchema`, svgSchema, `instance`, null, (svg) => svg);
