import * as jsonschema from "jsonschema";
import { UuidSchema, uuidSchema } from "../../uuid-schema";
import {
  LineCharacterStateSchema,
  lineCharacterStateSchema,
} from "./line-character-state-schema";
import { TextSchema, textSchema } from "../../text-schema";

export const lineStateSchema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  type: `object`,
  additionalProperties: false,
  required: [`sceneUuid`, `text`, `characters`],
  properties: {
    sceneUuid: uuidSchema,
    text: textSchema,
    characters: {
      type: `object`,
      additionalProperties: false,
      patternProperties: {
        "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$": lineCharacterStateSchema,
      },
    },
  },
};

export type LineStateSchema = {
  readonly sceneUuid: UuidSchema;
  readonly text: TextSchema;
  readonly characters: {
    readonly [characterUuid: string]: LineCharacterStateSchema;
  };
};
