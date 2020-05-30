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
  schemaHelpers.validateUnpaddedString(
    description,
    schema,
    path,
    50,
    overriddenErrors,
    instanceFactory
  );
}

validateNameSchema(`nameSchema`, nameSchema, `instance`, null, (name) => name);
