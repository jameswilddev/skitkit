import { UuidSchema } from "../../../schema/uuid-schema";

export type LineState = {
  readonly sceneUuid: UuidSchema;
  readonly text: string;
  readonly characters: {
    readonly [characterUuid: string]: {
      readonly emoteUuid: UuidSchema;
    };
  };
};
