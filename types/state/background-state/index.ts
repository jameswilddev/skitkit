import { NameSchema } from "../../../schema/name-schema";
import { SvgSchema } from "../../../schema/svg-schema";

export type BackgroundState = {
  readonly name: NameSchema;
  readonly svg: SvgSchema;
};
