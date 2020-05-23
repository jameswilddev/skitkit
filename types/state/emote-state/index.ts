import { NameSchema } from "../../../schema/name-schema";
import { SvgSchema } from "../../../schema/svg-schema";
import { UuidSchema } from "../../../schema/uuid-schema";

export type EmoteState = {
  readonly characterUuid: UuidSchema;
  readonly name: NameSchema;
  readonly svg: SvgSchema;
};
