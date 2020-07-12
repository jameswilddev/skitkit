import { LocalStorageHelper } from "../local-storage-helper";
import { History } from "../history";
import { stateSchema } from "../../schema/state-schema";

export const histories = new LocalStorageHelper<History>(
  `histories`,
  `skitKitHistory`,
  stateSchema
);
