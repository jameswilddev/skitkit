import * as jsonschema from "jsonschema";
import { Json } from "..";

export function accepts(
  description: string,
  instance: Json,
  schema: jsonschema.Schema
): void {
  describe(description, () => {
    let validationResult: jsonschema.ValidatorResult;

    beforeAll(() => {
      validationResult = jsonschema.validate(instance, schema);
    });

    it(`is valid`, () => {
      expect(validationResult.valid).toBeTrue();
    });

    it(`has no errors`, () => {
      expect(validationResult.errors).toEqual([]);
    });
  });
}

export function rejects(
  description: string,
  instance: Json,
  schema: jsonschema.Schema,
  errors: ReadonlyArray<string>
): void {
  describe(description, () => {
    let validationResult: jsonschema.ValidatorResult;

    beforeAll(() => {
      validationResult = jsonschema.validate(instance, schema);
    });

    it(`is not valid`, () => {
      expect(validationResult.valid).toBeFalse();
    });

    it(`has the expected errors`, () => {
      for (const error of errors) {
        expect(
          validationResult.errors.map((error) => error.toString())
        ).toContain(error);
      }
    });

    it(`has no unexpected errors`, () => {
      for (const error of validationResult.errors) {
        expect(errors).toContain(error.toString());
      }
    });
  });
}

export function rejectsNonObjects(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>
): void {
  describe(description, () => {
    rejects(
      `empty strings`,
      ``,
      schema,
      overriddenErrors || [`${path} is not of a type(s) object`]
    );

    rejects(
      `non-empty strings`,
      `Test Non-Empty String`,
      schema,
      overriddenErrors || [`${path} is not of a type(s) object`]
    );

    rejects(
      `zero`,
      0,
      schema,
      overriddenErrors || [`${path} is not of a type(s) object`]
    );

    rejects(
      `negative zero`,
      -0,
      schema,
      overriddenErrors || [`${path} is not of a type(s) object`]
    );

    rejects(
      `positive integers`,
      326,
      schema,
      overriddenErrors || [`${path} is not of a type(s) object`]
    );

    rejects(
      `negative integers`,
      -326,
      schema,
      overriddenErrors || [`${path} is not of a type(s) object`]
    );

    rejects(
      `positive decimals`,
      32.6,
      schema,
      overriddenErrors || [`${path} is not of a type(s) object`]
    );

    rejects(
      `negative decimals`,
      -32.6,
      schema,
      overriddenErrors || [`${path} is not of a type(s) object`]
    );

    rejects(
      `empty arrays`,
      [],
      schema,
      overriddenErrors || [`${path} is not of a type(s) object`]
    );
  });
}

export function rejectsMissingProperty(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instance: Json
): void {
  describe(description, () => {
    rejects(
      `missing`,
      instance,
      schema,
      overriddenErrors || [`${path} requires property "${description}"`]
    );
  });
}

export function rejectsOtherThanExpectedString(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  expected: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (text: Json) => Json
): void {
  describe(description, () => {
    rejects(
      `empty strings`,
      instanceFactory(``),
      schema,
      overriddenErrors || [`${path} is not one of enum values: ${expected}`]
    );

    rejects(
      `unexpected strings`,
      instanceFactory(`Test Unexpected String`),
      schema,
      overriddenErrors || [`${path} is not one of enum values: ${expected}`]
    );

    rejects(
      `preceded by white space`,
      instanceFactory(` ${expected}`),
      schema,
      overriddenErrors || [`${path} is not one of enum values: ${expected}`]
    );

    rejects(
      `followed by white space`,
      instanceFactory(`${expected} `),
      schema,
      overriddenErrors || [`${path} is not one of enum values: ${expected}`]
    );

    if (expected !== expected.toUpperCase()) {
      rejects(
        `in upper case`,
        instanceFactory(expected.toUpperCase()),
        schema,
        overriddenErrors || [`${path} is not one of enum values: ${expected}`]
      );
    }

    if (expected !== expected.toLowerCase()) {
      rejects(
        `in lower case`,
        instanceFactory(expected.toLowerCase()),
        schema,
        overriddenErrors || [`${path} is not one of enum values: ${expected}`]
      );
    }

    rejects(
      `zero`,
      instanceFactory(0),
      schema,
      overriddenErrors || [
        `${path} is not of a type(s) string`,
        `${path} is not one of enum values: ${expected}`,
      ]
    );

    rejects(
      `negative zero`,
      instanceFactory(-0),
      schema,
      overriddenErrors || [
        `${path} is not of a type(s) string`,
        `${path} is not one of enum values: ${expected}`,
      ]
    );

    rejects(
      `positive integers`,
      instanceFactory(326),
      schema,
      overriddenErrors || [
        `${path} is not of a type(s) string`,
        `${path} is not one of enum values: ${expected}`,
      ]
    );

    rejects(
      `negative integers`,
      instanceFactory(-326),
      schema,
      overriddenErrors || [
        `${path} is not of a type(s) string`,
        `${path} is not one of enum values: ${expected}`,
      ]
    );

    rejects(
      `positive decimals`,
      instanceFactory(32.6),
      schema,
      overriddenErrors || [
        `${path} is not of a type(s) string`,
        `${path} is not one of enum values: ${expected}`,
      ]
    );

    rejects(
      `negative decimals`,
      instanceFactory(-32.6),
      schema,
      overriddenErrors || [
        `${path} is not of a type(s) string`,
        `${path} is not one of enum values: ${expected}`,
      ]
    );

    rejects(
      `empty arrays`,
      instanceFactory([]),
      schema,
      overriddenErrors || [
        `${path} is not of a type(s) string`,
        `${path} is not one of enum values: ${expected}`,
      ]
    );

    rejects(
      `empty objects`,
      instanceFactory({}),
      schema,
      overriddenErrors || [
        `${path} is not of a type(s) string`,
        `${path} is not one of enum values: ${expected}`,
      ]
    );
  });
}
