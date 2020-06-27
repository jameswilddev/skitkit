import { StateSchema } from "../../schema/state-schema";
import { EventSchema } from "../../schema/event-schema";

export type History = {
  readonly beforeSteps: StateSchema;
  readonly doneSteps: ReadonlyArray<EventSchema>;
  readonly undoneSteps: ReadonlyArray<EventSchema>;
};
