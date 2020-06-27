import { History } from "..";
import { StateSchema } from "../../../schema/state-schema";
import { applyEvent } from "../../../apply-event";
import { stringifyEventApplicationError } from "../../../stringify-event-application-error";

export function getCurrentFromHistory(history: History): StateSchema {
  let current = history.beforeSteps;

  for (const step of history.doneSteps) {
    const result = applyEvent(current, step);

    if (!result.successful) {
      throw new Error(stringifyEventApplicationError(result.error));
    }

    current = result.state;
  }

  return current;
}
