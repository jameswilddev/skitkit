import { NameSchema } from "../../schema/name-schema";
import { UuidSchema } from "../../schema/uuid-schema";
import { SvgSchema } from "../../schema/svg-schema";

export type State = {
  readonly backgrounds: {
    readonly [backgroundUuid: string]: {
      readonly name: NameSchema;
      readonly svg: SvgSchema;
    };
  };
  readonly characters: {
    readonly [characterUuid: string]: {
      readonly name: NameSchema;
      readonly emoteUuids: ReadonlyArray<UuidSchema>;
    };
  };
  readonly emotes: {
    readonly [emoteUuid: string]: {
      readonly characterUuid: UuidSchema;
      readonly name: NameSchema;
      readonly svg: SvgSchema;
    };
  };
  readonly scenes: {
    readonly [sceneUuid: string]: {
      readonly name: NameSchema;
      readonly backgroundUuid: UuidSchema;
    };
  };
};
