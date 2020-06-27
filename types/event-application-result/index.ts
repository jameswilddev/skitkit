import { StateSchema } from "../../schema/state-schema";
import { EventApplicationError } from "./event-application-error";

export type EventApplicationResult =
  | {
      readonly successful: true;
      readonly state: StateSchema;
    }
  | {
      readonly successful: false;
      readonly error: EventApplicationError;
    };
