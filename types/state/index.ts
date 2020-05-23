import { EmoteState } from "./emote-state";
import { SceneState } from "./scene-state";
import { CharacterState } from "./character-state";
import { BackgroundState } from "./background-state";

export type State = {
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
};
