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

export function rejectsOtherThanExpectedString(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  expected: string,
  factory: (text: Json) => Json
): void {
  describe(description, () => {
    rejects(`empty strings`, factory(``), schema, [
      `${path} is not one of enum values: ${expected}`,
    ]);

    rejects(`unexpected strings`, factory(`Test Unexpected String`), schema, [
      `${path} is not one of enum values: ${expected}`,
    ]);

    rejects(`preceded by white space`, factory(` ${expected}`), schema, [
      `${path} is not one of enum values: ${expected}`,
    ]);

    rejects(`followed by white space`, factory(`${expected} `), schema, [
      `${path} is not one of enum values: ${expected}`,
    ]);

    if (expected !== expected.toUpperCase()) {
      rejects(`in upper case`, factory(expected.toUpperCase()), schema, [
        `${path} is not one of enum values: ${expected}`,
      ]);
    }

    if (expected !== expected.toLowerCase()) {
      rejects(`in lower case`, factory(expected.toLowerCase()), schema, [
        `${path} is not one of enum values: ${expected}`,
      ]);
    }

    rejects(`zero`, factory(0), schema, [
      `${path} is not of a type(s) string`,
      `${path} is not one of enum values: ${expected}`,
    ]);

    rejects(`negative zero`, factory(-0), schema, [
      `${path} is not of a type(s) string`,
      `${path} is not one of enum values: ${expected}`,
    ]);

    rejects(`positive integers`, factory(326), schema, [
      `${path} is not of a type(s) string`,
      `${path} is not one of enum values: ${expected}`,
    ]);

    rejects(`negative integers`, factory(-326), schema, [
      `${path} is not of a type(s) string`,
      `${path} is not one of enum values: ${expected}`,
    ]);

    rejects(`positive decimals`, factory(32.6), schema, [
      `${path} is not of a type(s) string`,
      `${path} is not one of enum values: ${expected}`,
    ]);

    rejects(`negative decimals`, factory(-32.6), schema, [
      `${path} is not of a type(s) string`,
      `${path} is not one of enum values: ${expected}`,
    ]);

    rejects(`empty arrays`, factory([]), schema, [
      `${path} is not of a type(s) string`,
      `${path} is not one of enum values: ${expected}`,
    ]);

    rejects(`empty objects`, factory({}), schema, [
      `${path} is not of a type(s) string`,
      `${path} is not one of enum values: ${expected}`,
    ]);
  });
}
