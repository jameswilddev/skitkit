import * as jsonschema from "jsonschema";
import { validateUnpaddedString } from "../unit";
import { Json, nameSchema } from "../..";

export function validateNameSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (name: Json) => Json
): void {
  validateUnpaddedString(
    description,
    schema,
    path,
    50,
    overriddenErrors,
    instanceFactory
  );
}

validateNameSchema(`nameSchema`, nameSchema, `instance`, null, (name) => name);
