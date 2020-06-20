import { History } from "..";

export function redoHistory(history: History): History {
  return {
    beforeSteps: history.beforeSteps,
    doneSteps: [...history.doneSteps, history.undoneSteps[0]],
    undoneSteps: history.undoneSteps.slice(1),
  };
}
