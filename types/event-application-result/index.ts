import { State } from "../state";
import { EventApplicationError } from "./event-application-error";

export type EventApplicationResult =
  | {
      readonly successful: true;
      readonly state: State;
    }
  | {
      readonly successful: false;
      readonly error: EventApplicationError;
    };
