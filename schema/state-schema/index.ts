import { NameSchema } from "../name-schema";
import { EmoteStateSchema } from "./emote-state-schema";
import { SceneStateSchema } from "./scene-state-schema";
import { LineStateSchema } from "./line-state-schema";
import { CharacterStateSchema } from "./character-state-schema";
import { BackgroundStateSchema } from "./background-state-schema";

export type StateSchema = {
  readonly name: NameSchema;
  readonly backgrounds: {
    readonly [backgroundUuid: string]: BackgroundStateSchema;
  };
  readonly characters: {
    readonly [characterUuid: string]: CharacterStateSchema;
  };
  readonly emotes: {
    readonly [emoteUuid: string]: EmoteStateSchema;
  };
  readonly scenes: {
    readonly [sceneUuid: string]: SceneStateSchema;
  };
  readonly lines: {
    readonly [lineUuid: string]: LineStateSchema;
  };
};
