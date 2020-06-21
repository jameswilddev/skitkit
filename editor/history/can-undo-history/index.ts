import { History } from "..";

export function canUndoHistory(history: History): boolean {
  return history.doneSteps.length > 0;
}
