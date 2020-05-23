import { NameSchema } from "../name-schema";
import { UuidSchema } from "../uuid-schema";
import { SvgSchema } from "../svg-schema";

export type StateSchema = {
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
      readonly svg: SvgSchema;
    };
  };
};
