import { History } from "..";

export function canRedoHistory(history: History): boolean {
  return history.undoneSteps.length > 0;
}
