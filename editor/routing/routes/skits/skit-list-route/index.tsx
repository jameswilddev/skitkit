import * as superfine from "superfine";
import { UuidSchema } from "../../../../../schema/uuid-schema";
import { NameSchema } from "../../../../../schema/name-schema";

export type SkitListRouteParameters = {
  readonly skits: ReadonlyArray<{
    readonly uuid: UuidSchema;
    readonly name: NameSchema;
  }>;
};

export function skitListRouteView(
  parameters: SkitListRouteParameters
): JSX.Element {
  let list: JSX.Element;

  if (parameters.skits.length === 0) {
    list = (
      <div className="empty-list-message">You have not created any skits.</div>
    );
  } else {
    list = (
      <ul className="text-list">
        {parameters.skits.map((skit) => (
          <li>
            <a href={`#skits/${skit.uuid}`}>{skit.name}</a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <body>
      <header>
        <h1>
          <a href="#">SkitKit</a>
        </h1>
        <nav>
          <a href="#skits">Skits</a>
        </nav>
      </header>
      <article>{list}</article>
      <footer>
        <button>New Skit</button>
      </footer>
    </body>
  );
}
