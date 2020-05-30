import * as CreateBackgroundEventSchemaHelpers from "./background/create-background-event-schema/unit";
import * as DeleteBackgroundEventSchemaHelpers from "./background/delete-background-event-schema/unit";
import * as UpdateBackgroundNameEventSchemaHelpers from "./background/update-background-name-event-schema/unit";
import * as UpdateBackgroundSvgEventSchemaHelpers from "./background/update-background-svg-event-schema/unit";
import * as CreateCharacterEventSchemaHelpers from "./character/create-character-event-schema/unit";
import * as DeleteCharacterEventSchemaHelpers from "./character/delete-character-event-schema/unit";
import * as UpdateCharacterNameEventSchemaHelpers from "./character/update-character-name-event-schema/unit";
import * as CreateEmoteEventSchemaHelpers from "./emote/create-emote-event-schema/unit";
import * as DeleteEmoteEventSchemaHelpers from "./emote/delete-emote-event-schema/unit";
import * as UpdateEmoteNameEventSchemaHelpers from "./emote/update-emote-name-event-schema/unit";
import * as UpdateEmoteSvgEventSchemaHelpers from "./emote/update-emote-svg-event-schema/unit";
import * as UpdateLineTextEventSchemaHelpers from "./line/update-line-text-event-schema/unit";
import * as CreateSceneEventSchemaHelpers from "./scene/create-scene-event-schema/unit";
import * as DeleteSceneEventSchemaHelpers from "./scene/delete-scene-event-schema/unit";
import * as UpdateSceneBackgroundEventSchemaHelpers from "./scene/update-scene-background-event-schema/unit";
import * as UpdateSceneNameEventSchemaHelpers from "./scene/update-scene-name-event-schema/unit";
import * as SchemaHelpers from "../unit";
import { eventSchema } from "../..";

SchemaHelpers.rejectsNonObjects(`eventSchema`, eventSchema, `instance`, [
  `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
]);

CreateBackgroundEventSchemaHelpers.validateCreateBackgroundEventSchema(
  `eventSchema createBackgroundEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (createBackgroundEvent) => createBackgroundEvent
);

DeleteBackgroundEventSchemaHelpers.validateDeleteBackgroundEventSchema(
  `eventSchema deleteBackgroundEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (deleteBackgroundEvent) => deleteBackgroundEvent
);

UpdateBackgroundNameEventSchemaHelpers.validateUpdateBackgroundNameEventSchema(
  `eventSchema updateBackgroundNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (updateBackgroundNameEvent) => updateBackgroundNameEvent
);

UpdateBackgroundSvgEventSchemaHelpers.validateUpdateBackgroundSvgEventSchema(
  `eventSchema updateBackgroundSvgEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (updateBackgroundSvgEvent) => updateBackgroundSvgEvent
);

CreateCharacterEventSchemaHelpers.validateCreateCharacterEventSchema(
  `eventSchema createCharacterEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (createCharacterEvent) => createCharacterEvent
);

DeleteCharacterEventSchemaHelpers.validateDeleteCharacterEventSchema(
  `eventSchema deleteCharacterEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (deleteCharacterEvent) => deleteCharacterEvent
);

UpdateCharacterNameEventSchemaHelpers.validateUpdateCharacterNameEventSchema(
  `eventSchema updateCharacterNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (updateCharacterNameEvent) => updateCharacterNameEvent
);

CreateEmoteEventSchemaHelpers.validateCreateEmoteEventSchema(
  `eventSchema createEmoteEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (createEmoteEvent) => createEmoteEvent
);

DeleteEmoteEventSchemaHelpers.validateDeleteEmoteEventSchema(
  `eventSchema deleteEmoteEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (deleteEmoteEvent) => deleteEmoteEvent
);

UpdateEmoteNameEventSchemaHelpers.validateUpdateEmoteNameEventSchema(
  `eventSchema updateEmoteNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (updateEmoteNameEvent) => updateEmoteNameEvent
);

UpdateEmoteSvgEventSchemaHelpers.validateUpdateEmoteSvgEventSchema(
  `eventSchema updateEmoteSvgEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (updateEmoteSvgEvent) => updateEmoteSvgEvent
);

UpdateLineTextEventSchemaHelpers.validateUpdateLineTextEventSchema(
  `eventSchema updateLineTextEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (updateLineTextEvent) => updateLineTextEvent
);

CreateSceneEventSchemaHelpers.validateCreateSceneEventSchema(
  `eventSchema createSceneEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (createSceneEvent) => createSceneEvent
);

DeleteSceneEventSchemaHelpers.validateDeleteSceneEventSchema(
  `eventSchema deleteSceneEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (deleteSceneEvent) => deleteSceneEvent
);

UpdateSceneBackgroundEventSchemaHelpers.validateUpdateSceneBackgroundEventSchema(
  `eventSchema updateSceneNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (updateSceneBackgroundEvent) => updateSceneBackgroundEvent
);

UpdateSceneNameEventSchemaHelpers.validateUpdateSceneNameEventSchema(
  `eventSchema updateSceneNameEvent`,
  eventSchema,
  `instance`,
  [
    `instance is not exactly one from [subschema 0],[subschema 1],[subschema 2],[subschema 3],[subschema 4],[subschema 5],[subschema 6],[subschema 7],[subschema 8],[subschema 9],[subschema 10],[subschema 11],[subschema 12],[subschema 13],[subschema 14],[subschema 15]`,
  ],
  (updateSceneNameEvent) => updateSceneNameEvent
);
