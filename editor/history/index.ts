import { State } from "../../types/state";
import { EventSchema } from "../../schema/event-schema";

export type History = {
  readonly beforeSteps: State;
  readonly doneSteps: ReadonlyArray<EventSchema>;
  readonly undoneSteps: ReadonlyArray<EventSchema>;
};
