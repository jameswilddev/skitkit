import { State } from "../../types/state";
import { EventSchema } from "../../schema/event-schema";

export type PersistedSkit = {
  readonly beforeSteps: State;
  readonly doneSteps: ReadonlyArray<EventSchema>;
  readonly undoneSteps: ReadonlyArray<EventSchema>;
};
