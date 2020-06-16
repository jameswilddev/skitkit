import { State } from "../../types/state";
import { EventSchema } from "../../schema/event-schema";

export type PersistedSkit = {
  readonly startOfUndoHistory: State;
  readonly doneSteps: ReadonlyArray<EventSchema>;
  readonly current: State;
  readonly undoneSteps: ReadonlyArray<EventSchema>;
};
