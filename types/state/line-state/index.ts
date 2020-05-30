import { UuidSchema } from "../../../schema/uuid-schema";
import { LineCharacterState } from "./line-character-state";

export type LineState = {
  readonly sceneUuid: UuidSchema;
  readonly text: string;
  readonly characters: {
    readonly [characterUuid: string]: LineCharacterState;
  };
};
