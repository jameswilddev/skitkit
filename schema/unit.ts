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
