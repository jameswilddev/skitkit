import { NameSchema } from "../../name-schema";
import { UuidSchema } from "../../uuid-schema";

export type CharacterStateSchema = {
  readonly name: NameSchema;
  readonly emoteUuids: ReadonlyArray<UuidSchema>;
};
