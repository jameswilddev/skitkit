import { UuidSchema } from "../../uuid-schema";
import { LineCharacterStateSchema } from "./line-character-state-schema";

export type LineStateSchema = {
  readonly sceneUuid: UuidSchema;
  readonly text: string;
  readonly characters: {
    readonly [characterUuid: string]: LineCharacterStateSchema;
  };
};
