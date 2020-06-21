import { validateCreateBackgroundEventSchema } from "./background/create-background-event-schema/unit";
import { validateDeleteBackgroundEventSchema } from "./background/delete-background-event-schema/unit";
import { validateUpdateBackgroundNameEventSchema } from "./background/update-background-name-event-schema/unit";
import { validateUpdateBackgroundSvgEventSchema } from "./background/update-background-svg-event-schema/unit";
import { validateCreateCharacterEventSchema } from "./character/create-character-event-schema/unit";
import { validateDeleteCharacterEventSchema } from "./character/delete-character-event-schema/unit";
import { validateUpdateCharacterNameEventSchema } from "./character/update-character-name-event-schema/unit";
import { validateCreateEmoteEventSchema } from "./emote/create-emote-event-schema/unit";
import { validateDeleteEmoteEventSchema } from "./emote/delete-emote-event-schema/unit";
import { validateUpdateEmoteNameEventSchema } from "./emote/update-emote-name-event-schema/unit";
import { validateUpdateEmoteSvgEventSchema } from "./emote/update-emote-svg-event-schema/unit";
import { validateCreateStartingLineEventSchema } from "./line/create-starting-line-event-schema/unit";
import { validateUpdateLineCharacterEmoteEventSchema } from "./line/update-line-character-emote-event-schema/unit";
import { validateUpdateLineTextEventSchema } from "./line/update-line-text-event-schema/unit";
import { validateCreateSceneEventSchema } from "./scene/create-scene-event-schema/unit";
import { validateDeleteSceneEventSchema } from "./scene/delete-scene-event-schema/unit";
import { validateUpdateSceneBackgroundEventSchema } from "./scene/update-scene-background-event-schema/unit";
import { validateUpdateSceneNameEventSchema } from "./scene/update-scene-name-event-schema/unit";
import { validateUpdateNameEventSchema } from "./update-name-event-schema/unit";
import { rejectsNonObjects } from "../unit";
import { eventSchema } from "../..";

rejectsNonObjects(
  `eventSchema`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (nonObject) => nonObject
);

validateCreateBackgroundEventSchema(
  `eventSchema createBackgroundEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (createBackgroundEvent) => createBackgroundEvent
);

validateDeleteBackgroundEventSchema(
  `eventSchema deleteBackgroundEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (deleteBackgroundEvent) => deleteBackgroundEvent
);

validateUpdateBackgroundNameEventSchema(
  `eventSchema updateBackgroundNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (updateBackgroundNameEvent) => updateBackgroundNameEvent
);

validateUpdateBackgroundSvgEventSchema(
  `eventSchema updateBackgroundSvgEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (updateBackgroundSvgEvent) => updateBackgroundSvgEvent
);

validateCreateCharacterEventSchema(
  `eventSchema createCharacterEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (createCharacterEvent) => createCharacterEvent
);

validateDeleteCharacterEventSchema(
  `eventSchema deleteCharacterEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (deleteCharacterEvent) => deleteCharacterEvent
);

validateUpdateCharacterNameEventSchema(
  `eventSchema updateCharacterNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (updateCharacterNameEvent) => updateCharacterNameEvent
);

validateCreateEmoteEventSchema(
  `eventSchema createEmoteEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (createEmoteEvent) => createEmoteEvent
);

validateDeleteEmoteEventSchema(
  `eventSchema deleteEmoteEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (deleteEmoteEvent) => deleteEmoteEvent
);

validateUpdateEmoteNameEventSchema(
  `eventSchema updateEmoteNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (updateEmoteNameEvent) => updateEmoteNameEvent
);

validateUpdateEmoteSvgEventSchema(
  `eventSchema updateEmoteSvgEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (updateEmoteSvgEvent) => updateEmoteSvgEvent
);

validateCreateStartingLineEventSchema(
  `eventSchema createStartingLineEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (createStartingLineEvent) => createStartingLineEvent
);

validateUpdateLineCharacterEmoteEventSchema(
  `eventSchema updateLineCharacterEmoteEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (updateLineCharacterEmoteSvgEvent) => updateLineCharacterEmoteSvgEvent
);

validateUpdateLineTextEventSchema(
  `eventSchema updateLineTextEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (updateLineTextEvent) => updateLineTextEvent
);

validateCreateSceneEventSchema(
  `eventSchema createSceneEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (createSceneEvent) => createSceneEvent
);

validateDeleteSceneEventSchema(
  `eventSchema deleteSceneEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (deleteSceneEvent) => deleteSceneEvent
);

validateUpdateSceneBackgroundEventSchema(
  `eventSchema updateSceneNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (updateSceneBackgroundEvent) => updateSceneBackgroundEvent
);

validateUpdateSceneNameEventSchema(
  `eventSchema updateSceneNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (updateSceneNameEvent) => updateSceneNameEvent
);

validateUpdateNameEventSchema(
  `eventSchema updateNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15],[subschema 16],[subschema 17],[subschema 18]`,
  ],
  (updateNameEvent) => updateNameEvent
);
