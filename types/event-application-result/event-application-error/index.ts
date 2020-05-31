import { EntityType } from "../../entity-type";
import { UuidSchema } from "../../../schema/uuid-schema";

export type EventApplicationError =
  | {
      readonly type: `entityDoesNotExist`;
      readonly entityType: EntityType;
      readonly uuid: UuidSchema;
    }
  | {
      readonly type: `entityAlreadyExists`;
      readonly entityType: EntityType;
      readonly uuid: UuidSchema;
    }
  | {
      readonly type: `entityIsReferenced`;
      readonly referencingEntityType: EntityType;
      readonly referencingUuid: UuidSchema;
      readonly referencedEntityType: EntityType;
      readonly referencedUuid: UuidSchema;
    }
  | {
      readonly type: `noEntitiesExist`;
      readonly entityType: EntityType;
    }
  | {
      readonly type: `noRelationshipBetweenEntities`;
      readonly entities: ReadonlyArray<{
        readonly entityType: EntityType;
        readonly uuid: UuidSchema;
      }>;
    };
