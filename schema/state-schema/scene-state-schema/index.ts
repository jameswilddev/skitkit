import { NameSchema } from "../../name-schema";
import { UuidSchema } from "../../uuid-schema";

export type SceneStateSchema = {
  readonly name: NameSchema;
  readonly backgroundUuid: UuidSchema;
  readonly lineUuids: ReadonlyArray<UuidSchema>;
};
