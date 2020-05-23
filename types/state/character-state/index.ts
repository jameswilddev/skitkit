import { NameSchema } from "../../../schema/name-schema";
import { UuidSchema } from "../../../schema/uuid-schema";

export type CharacterState = {
  readonly name: NameSchema;
  readonly emoteUuids: ReadonlyArray<UuidSchema>;
};
