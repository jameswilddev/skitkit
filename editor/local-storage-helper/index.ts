import * as jsonschema from "jsonschema";
import { Json } from "../../json";

export interface LocalStorageHelperInterface<T extends Json> {
  getItem(key: string): null | T;
  setItem(key: string, value: T): void;
  removeItem(key: string): void;
}

export class LocalStorageHelper<T extends Json>
  implements LocalStorageHelperInterface<T> {
  constructor(
    public readonly name: string,
    public readonly keyPrefix: string,
    public readonly schema: jsonschema.Schema
  ) {}

  getItem(key: string): null | T {
    const json = localStorage.getItem(`${this.keyPrefix}${key}`);

    if (json === null) {
      return null;
    }

    let deserialized: T;

    try {
      deserialized = JSON.parse(json);
    } catch {
      throw new Error(
        `Failed to deserialize value for key ${this.keyPrefix}${key} of localStorage helper ${this.name} as JSON`
      );
    }

    const validationResult = jsonschema.validate(deserialized, this.schema);

    if (!validationResult.valid) {
      throw new Error(
        `Value for key ${this.keyPrefix}${key} of localStorage helper ${
          this.name
        } failed JSON schema validation:${validationResult.errors
          .map((e) => `\n - ${e}`)
          .sort()
          .join(``)}`
      );
    }

    return deserialized;
  }

  setItem(key: string, value: T): void {
    localStorage.setItem(`${this.keyPrefix}${key}`, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(`${this.keyPrefix}${key}`);
  }
}