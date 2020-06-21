import { History } from "..";

export function undoHistory(history: History): History {
  return {
    beforeSteps: history.beforeSteps,
    doneSteps: history.doneSteps.slice(0, history.doneSteps.length - 1),
    undoneSteps: [
      history.doneSteps[history.doneSteps.length - 1],
      ...history.undoneSteps,
    ],
  };
}
