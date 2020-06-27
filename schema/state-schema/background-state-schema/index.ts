import { NameSchema } from "../../name-schema";
import { SvgSchema } from "../../svg-schema";

export type BackgroundStateSchema = {
  readonly name: NameSchema;
  readonly svg: SvgSchema;
};
