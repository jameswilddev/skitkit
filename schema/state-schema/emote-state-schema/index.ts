import { NameSchema } from "../../name-schema";
import { SvgSchema } from "../../svg-schema";
import { UuidSchema } from "../../uuid-schema";

export type EmoteStateSchema = {
  readonly characterUuid: UuidSchema;
  readonly name: NameSchema;
  readonly svg: SvgSchema;
};
