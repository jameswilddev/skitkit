import {
  createBackgroundEventSchema,
  CreateBackgroundEventSchema,
} from "./background/create-background-event-schema";
import {
  deleteBackgroundEventSchema,
  DeleteBackgroundEventSchema,
} from "./background/delete-background-event-schema";
import {
  updateBackgroundNameEventSchema,
  UpdateBackgroundNameEventSchema,
} from "./background/update-background-name-event-schema";
import {
  updateBackgroundSvgEventSchema,
  UpdateBackgroundSvgEventSchema,
} from "./background/update-background-svg-event-schema";
import {
  createCharacterEventSchema,
  CreateCharacterEventSchema,
} from "./character/create-character-event-schema";
import {
  deleteCharacterEventSchema,
  DeleteCharacterEventSchema,
} from "./character/delete-character-event-schema";
import {
  updateCharacterNameEventSchema,
  UpdateCharacterNameEventSchema,
} from "./character/update-character-name-event-schema";
import {
  createEmoteEventSchema,
  CreateEmoteEventSchema,
} from "./emote/create-emote-event-schema";
import {
  deleteEmoteEventSchema,
  DeleteEmoteEventSchema,
} from "./emote/delete-emote-event-schema";
import {
  updateEmoteNameEventSchema,
  UpdateEmoteNameEventSchema,
} from "./emote/update-emote-name-event-schema";
import {
  updateEmoteSvgEventSchema,
  UpdateEmoteSvgEventSchema,
} from "./emote/update-emote-svg-event-schema";
import {
  createSceneEventSchema,
  CreateSceneEventSchema,
} from "./scene/create-scene-event-schema";
import {
  deleteSceneEventSchema,
  DeleteSceneEventSchema,
} from "./scene/delete-scene-event-schema";
import {
  updateSceneBackgroundEventSchema,
  UpdateSceneBackgroundEventSchema,
} from "./scene/update-scene-background-event-schema";
import {
  updateSceneNameEventSchema,
  UpdateSceneNameEventSchema,
} from "./scene/update-scene-name-event-schema";

export const eventSchema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  oneOf: [
    createBackgroundEventSchema,
    deleteBackgroundEventSchema,
    updateBackgroundNameEventSchema,
    updateBackgroundSvgEventSchema,
    createCharacterEventSchema,
    deleteCharacterEventSchema,
    updateCharacterNameEventSchema,
    createEmoteEventSchema,
    deleteEmoteEventSchema,
    updateEmoteNameEventSchema,
    updateEmoteSvgEventSchema,
    createSceneEventSchema,
    deleteSceneEventSchema,
    updateSceneBackgroundEventSchema,
    updateSceneNameEventSchema,
  ],
};

export type EventSchema =
  | CreateBackgroundEventSchema
  | DeleteBackgroundEventSchema
  | UpdateBackgroundNameEventSchema
  | UpdateBackgroundSvgEventSchema
  | CreateCharacterEventSchema
  | DeleteCharacterEventSchema
  | UpdateCharacterNameEventSchema
  | CreateEmoteEventSchema
  | DeleteEmoteEventSchema
  | UpdateEmoteNameEventSchema
  | UpdateEmoteSvgEventSchema
  | CreateSceneEventSchema
  | DeleteSceneEventSchema
  | UpdateSceneBackgroundEventSchema
  | UpdateSceneNameEventSchema;
