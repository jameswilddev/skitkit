import * as jsonschema from "jsonschema";
import { validateUnpaddedString } from "../unit";
import { Json, textSchema } from "../..";

export function validateTextSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (text: Json) => Json
): void {
  validateUnpaddedString(
    description,
    schema,
    path,
    200,
    overriddenErrors,
    instanceFactory
  );
}

validateTextSchema(`textSchema`, textSchema, `instance`, null, (text) => text);
