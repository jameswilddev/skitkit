import { NameSchema } from "../../schema/name-schema";
import { EmoteState } from "./emote-state";
import { SceneState } from "./scene-state";
import { LineState } from "./line-state";
import { CharacterState } from "./character-state";
import { BackgroundState } from "./background-state";

export type State = {
  readonly name: NameSchema;
  readonly backgrounds: {
    readonly [backgroundUuid: string]: BackgroundState;
  };
  readonly characters: {
    readonly [characterUuid: string]: CharacterState;
  };
  readonly emotes: {
    readonly [emoteUuid: string]: EmoteState;
  };
  readonly scenes: {
    readonly [sceneUuid: string]: SceneState;
  };
  readonly lines: {
    readonly [lineUuid: string]: LineState;
  };
};
