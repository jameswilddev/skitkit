import { History } from "..";
import { State } from "../../../types/state";
import { applyEvent } from "../../../apply-event";
import { stringifyEventApplicationError } from "../../../stringify-event-application-error";

export function getCurrentFromHistory(history: History): State {
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
