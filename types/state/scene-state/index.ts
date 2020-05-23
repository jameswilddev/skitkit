import { NameSchema } from "../../../schema/name-schema";
import { UuidSchema } from "../../../schema/uuid-schema";

export type SceneState = {
  readonly name: NameSchema;
  readonly backgroundUuid: UuidSchema;
};
