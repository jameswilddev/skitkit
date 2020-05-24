import { State } from "../types/state";
import { EventSchema } from "../schema/event-schema";
import { UuidSchema } from "../schema/uuid-schema";
import { EventApplicationResult } from "../types/event-application-result";
import { BackgroundState } from "../types/state/background-state";
import { CharacterState } from "../types/state/character-state";
import { EmoteState } from "../types/state/emote-state";
import { SceneState } from "../types/state/scene-state";

const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="256" width="256"><defs><linearGradient y2="256" x2="256" y1="0" x1="0" id="A" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="red"/><stop offset=".375" stop-color="#ff0"/><stop offset=".5" stop-color="#0f0"/><stop offset=".625" stop-color="#0ff"/><stop offset="1" stop-color="#00f"/></linearGradient></defs><rect x="0" y="0" width="256" height="256" fill="url(#A)"/><rect x="16" y="16" width="224" height="224" fill="#fff"/><text y="128" x="128" font-size="16" font-family="sans-serif" dominant-baseline="middle" text-anchor="middle">PLACEHOLDER</text></svg>`;

export function applyEvent(
  state: State,
  event: EventSchema
): EventApplicationResult {
  function exists(
    entityType: `backgrounds` | `characters` | `emotes` | `scenes`,
    uuid: UuidSchema
  ): boolean {
    return Object.prototype.hasOwnProperty.call(state[entityType], uuid);
  }

  switch (event.type) {
    case `createBackground`:
      if (exists(`backgrounds`, event.backgroundUuid)) {
        return {
          successful: false,
          error: {
            type: `entityAlreadyExists`,
            entityType: `background`,
            uuid: event.backgroundUuid,
          },
        };
      } else {
        return {
          successful: true,
          state: {
            ...state,
            backgrounds: {
              ...state.backgrounds,
              [event.backgroundUuid]: {
                name: `Untitled Background`,
                svg: placeholderSvg,
              },
            },
          },
        };
      }

    case `deleteBackground`:
      if (!exists(`backgrounds`, event.backgroundUuid)) {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `background`,
            uuid: event.backgroundUuid,
          },
        };
      } else {
        const referencingSceneUuids = Object.entries(state.scenes)
          .filter((pair) => pair[1].backgroundUuid === event.backgroundUuid)
          .map((pair) => pair[0]);

        if (referencingSceneUuids.length > 0) {
          return {
            successful: false,
            error: {
              type: `entityIsReferenced`,
              referencedEntityType: `background`,
              referencedUuid: event.backgroundUuid,
              referencingEntityType: `scene`,
              referencingUuid: referencingSceneUuids[0],
            },
          };
        } else {
          const backgrounds: { [backgroundUuid: string]: BackgroundState } = {};

          for (const backgroundUuid in state.backgrounds) {
            if (backgroundUuid !== event.backgroundUuid) {
              backgrounds[backgroundUuid] = state.backgrounds[backgroundUuid];
            }
          }

          return {
            successful: true,
            state: {
              ...state,
              backgrounds,
            },
          };
        }
      }

    case `updateBackgroundName`:
      if (exists(`backgrounds`, event.backgroundUuid)) {
        return {
          successful: true,
          state: {
            ...state,
            backgrounds: {
              ...state.backgrounds,
              [event.backgroundUuid]: {
                ...state.backgrounds[event.backgroundUuid],
                name: event.name,
              },
            },
          },
        };
      } else {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `background`,
            uuid: event.backgroundUuid,
          },
        };
      }

    case `updateBackgroundSvg`:
      if (exists(`backgrounds`, event.backgroundUuid)) {
        return {
          successful: true,
          state: {
            ...state,
            backgrounds: {
              ...state.backgrounds,
              [event.backgroundUuid]: {
                ...state.backgrounds[event.backgroundUuid],
                svg: event.svg,
              },
            },
          },
        };
      } else {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `background`,
            uuid: event.backgroundUuid,
          },
        };
      }

    case `createCharacter`:
      if (exists(`characters`, event.characterUuid)) {
        return {
          successful: false,
          error: {
            type: `entityAlreadyExists`,
            entityType: `character`,
            uuid: event.characterUuid,
          },
        };
      } else if (exists(`emotes`, event.characterUuid)) {
        return {
          successful: false,
          error: {
            type: `entityAlreadyExists`,
            entityType: `emote`,
            uuid: event.characterUuid,
          },
        };
      } else {
        return {
          successful: true,
          state: {
            ...state,
            characters: {
              ...state.characters,
              [event.characterUuid]: {
                name: `Untitled Character`,
                emoteUuids: [event.characterUuid],
              },
            },
            emotes: {
              ...state.emotes,
              [event.characterUuid]: {
                name: `Untitled Emote`,
                characterUuid: event.characterUuid,
                svg: placeholderSvg,
              },
            },
          },
        };
      }

    case `deleteCharacter`:
      if (!exists(`characters`, event.characterUuid)) {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `character`,
            uuid: event.characterUuid,
          },
        };
      } else {
        const characters: { [characterUuid: string]: CharacterState } = {};

        for (const characterUuid in state.characters) {
          if (characterUuid !== event.characterUuid) {
            characters[characterUuid] = state.characters[characterUuid];
          }
        }

        const emotes: { [emoteUuid: string]: EmoteState } = {};

        for (const emoteUuid in state.emotes) {
          const emote = state.emotes[emoteUuid];

          if (emote.characterUuid !== event.characterUuid) {
            emotes[emoteUuid] = emote;
          }
        }

        return {
          successful: true,
          state: {
            ...state,
            characters,
            emotes,
          },
        };
      }

    case `updateCharacterName`:
      if (exists(`characters`, event.characterUuid)) {
        return {
          successful: true,
          state: {
            ...state,
            characters: {
              ...state.characters,
              [event.characterUuid]: {
                ...state.characters[event.characterUuid],
                name: event.name,
              },
            },
          },
        };
      } else {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `character`,
            uuid: event.characterUuid,
          },
        };
      }

    case `createEmote`:
      if (!exists(`characters`, event.characterUuid)) {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `character`,
            uuid: event.characterUuid,
          },
        };
      } else if (exists(`emotes`, event.emoteUuid)) {
        return {
          successful: false,
          error: {
            type: `entityAlreadyExists`,
            entityType: `emote`,
            uuid: event.emoteUuid,
          },
        };
      } else {
        const character = state.characters[event.characterUuid];

        return {
          successful: true,
          state: {
            ...state,
            characters: {
              ...state.characters,
              [event.characterUuid]: {
                ...character,
                emoteUuids: [...character.emoteUuids, event.emoteUuid],
              },
            },
            emotes: {
              ...state.emotes,
              [event.emoteUuid]: {
                name: `Untitled Emote`,
                characterUuid: event.characterUuid,
                svg: placeholderSvg,
              },
            },
          },
        };
      }

    case `deleteEmote`:
      if (!exists(`emotes`, event.emoteUuid)) {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `emote`,
            uuid: event.emoteUuid,
          },
        };
      } else {
        const emote = state.emotes[event.emoteUuid];
        const character = state.characters[emote.characterUuid];

        const emotes: { [emoteUuid: string]: EmoteState } = {};

        for (const emoteUuid in state.emotes) {
          if (emoteUuid !== event.emoteUuid) {
            emotes[emoteUuid] = state.emotes[emoteUuid];
          }
        }

        const emoteUuids = character.emoteUuids.slice();
        emoteUuids.splice(emoteUuids.indexOf(event.emoteUuid), 1);

        return {
          successful: true,
          state: {
            ...state,
            characters: {
              ...state.characters,
              [emote.characterUuid]: {
                ...character,
                emoteUuids,
              },
            },
            emotes,
          },
        };
      }

    case `updateEmoteName`:
      if (exists(`emotes`, event.emoteUuid)) {
        return {
          successful: true,
          state: {
            ...state,
            emotes: {
              ...state.emotes,
              [event.emoteUuid]: {
                ...state.emotes[event.emoteUuid],
                name: event.name,
              },
            },
          },
        };
      } else {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `emote`,
            uuid: event.emoteUuid,
          },
        };
      }

    case `updateEmoteSvg`:
      if (exists(`emotes`, event.emoteUuid)) {
        return {
          successful: true,
          state: {
            ...state,
            emotes: {
              ...state.emotes,
              [event.emoteUuid]: {
                ...state.emotes[event.emoteUuid],
                svg: event.svg,
              },
            },
          },
        };
      } else {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `emote`,
            uuid: event.emoteUuid,
          },
        };
      }

    case `createScene`:
      if (exists(`scenes`, event.sceneUuid)) {
        return {
          successful: false,
          error: {
            type: `entityAlreadyExists`,
            entityType: `scene`,
            uuid: event.sceneUuid,
          },
        };
      } else if (Object.keys(state.backgrounds).length === 0) {
        return {
          successful: false,
          error: {
            type: `noEntitiesExist`,
            entityType: `background`,
          },
        };
      } else {
        return {
          successful: true,
          state: {
            ...state,
            scenes: {
              ...state.scenes,
              [event.sceneUuid]: {
                name: `Untitled Scene`,
                backgroundUuid: Object.entries(state.backgrounds).sort((a, b) =>
                  a[1].name.localeCompare(b[1].name)
                )[0][0],
              },
            },
          },
        };
      }

    case `deleteScene`:
      if (!exists(`scenes`, event.sceneUuid)) {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `scene`,
            uuid: event.sceneUuid,
          },
        };
      } else {
        const scenes: { [emoteUuid: string]: SceneState } = {};

        for (const sceneUuid in state.scenes) {
          if (sceneUuid !== event.sceneUuid) {
            scenes[sceneUuid] = state.scenes[sceneUuid];
          }
        }

        return {
          successful: true,
          state: {
            ...state,
            scenes,
          },
        };
      }

    case `updateSceneBackground`:
      if (!exists(`scenes`, event.sceneUuid)) {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `scene`,
            uuid: event.sceneUuid,
          },
        };
      } else if (!exists(`backgrounds`, event.backgroundUuid)) {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `background`,
            uuid: event.backgroundUuid,
          },
        };
      } else {
        return {
          successful: true,
          state: {
            ...state,
            scenes: {
              ...state.scenes,
              [event.sceneUuid]: {
                ...state.scenes[event.sceneUuid],
                backgroundUuid: event.backgroundUuid,
              },
            },
          },
        };
      }

    case `updateSceneName`:
      if (exists(`scenes`, event.sceneUuid)) {
        return {
          successful: true,
          state: {
            ...state,
            scenes: {
              ...state.scenes,
              [event.sceneUuid]: {
                ...state.scenes[event.sceneUuid],
                name: event.name,
              },
            },
          },
        };
      } else {
        return {
          successful: false,
          error: {
            type: `entityDoesNotExist`,
            entityType: `scene`,
            uuid: event.sceneUuid,
          },
        };
      }
  }
}