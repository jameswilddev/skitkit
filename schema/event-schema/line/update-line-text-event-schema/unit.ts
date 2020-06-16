import * as jsonschema from "jsonschema";
import {
  accepts,
  rejectsMissingProperty,
  rejectsOtherThanExpectedString,
  validateUnpaddedString,
  rejectsNonObjects,
} from "../../../unit";
import { validateUuidSchema } from "../../../uuid-schema/unit";
import { Json, updateLineTextEventSchema } from "../../../..";

export function validateUpdateLineTextEventSchema(
  description: string,
  schema: jsonschema.Schema,
  path: string,
  overriddenErrors: null | ReadonlyArray<string>,
  instanceFactory: (updateLineTextEvent: Json) => Json
): void {
  describe(description, () => {
    accepts(
      `valid`,
      instanceFactory({
        type: `updateLineText`,
        lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        text: `Test Text`,
      }),
      schema
    );

    rejectsMissingProperty(
      `type`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
        text: `Test Text`,
      })
    );

    rejectsOtherThanExpectedString(
      `type`,
      schema,
      `${path}.type`,
      `updateLineText`,
      overriddenErrors,
      (type) =>
        instanceFactory({
          type,
          lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          text: `Test Text`,
        })
    );

    rejectsMissingProperty(
      `lineUuid`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateLineText`,
        text: `Test Text`,
      })
    );

    validateUuidSchema(
      `lineUuid`,
      schema,
      `${path}.lineUuid`,
      overriddenErrors,
      (lineUuid) =>
        instanceFactory({
          type: `updateLineText`,
          lineUuid,
          text: `Test Text`,
        })
    );

    rejectsMissingProperty(
      `text`,
      schema,
      path,
      overriddenErrors,
      instanceFactory({
        type: `updateLineText`,
        lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
      })
    );

    validateUnpaddedString(
      `text`,
      schema,
      `${path}.text`,
      1000,
      overriddenErrors,
      (text) =>
        instanceFactory({
          type: `updateLineText`,
          lineUuid: `a366e69c-d60e-4e27-bd18-7aea8257bcdb`,
          text,
        })
    );
  });
}

rejectsNonObjects(
  `updateLineTextEventSchema`,
  updateLineTextEventSchema,
  `instance`,
  null,
  (nonObject) => nonObject
);

validateUpdateLineTextEventSchema(
  `updateLineTextEventSchema`,
  updateLineTextEventSchema,
  `instance`,
  null,
  (updateLineTextEvent) => updateLineTextEvent
);
