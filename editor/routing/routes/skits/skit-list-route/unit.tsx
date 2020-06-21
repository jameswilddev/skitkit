import * as superfine from "superfine";
import { skitListRouteView } from ".";

describe(`skitListRouteView`, () => {
  describe(`when there are no skits`, () => {
    let dom: JSX.Element;

    beforeAll(() => {
      dom = skitListRouteView({ skits: [] });
    });

    it(`returns the expected dom`, () => {
      expect(dom).toEqual(
        <body>
          <header>
            <h1>
              <a href="#">SkitKit</a>
            </h1>
            <nav>
              <a href="#skits">Skits</a>
            </nav>
          </header>
          <article>
            <div className="empty-list-message">
              You have not created any skits.
            </div>
          </article>
          <footer>
            <button>New Skit</button>
          </footer>
        </body>
      );
    });
  });

  describe(`when there is one skit`, () => {
    let dom: JSX.Element;

    beforeAll(() => {
      dom = skitListRouteView({
        skits: [
          {
            uuid: `73c87206-7df9-454e-b3d6-2e73237a6d62`,
            name: `Test Skit Name A`,
          },
        ],
      });
    });

    it(`returns the expected dom`, () => {
      expect(dom).toEqual(
        <body>
          <header>
            <h1>
              <a href="#">SkitKit</a>
            </h1>
            <nav>
              <a href="#skits">Skits</a>
            </nav>
          </header>
          <article>
            <ul className="text-list">
              <li>
                <a href="#skits/73c87206-7df9-454e-b3d6-2e73237a6d62">
                  Test Skit Name A
                </a>
              </li>
            </ul>
          </article>
          <footer>
            <button>New Skit</button>
          </footer>
        </body>
      );
    });
  });

  describe(`when there are two skits`, () => {
    let dom: JSX.Element;

    beforeAll(() => {
      dom = skitListRouteView({
        skits: [
          {
            uuid: `73c87206-7df9-454e-b3d6-2e73237a6d62`,
            name: `Test Skit Name A`,
          },
          {
            uuid: `b4d4d89f-41b6-476d-954b-7e14d5401b41`,
            name: `Test Skit Name B`,
          },
        ],
      });
    });

    it(`returns the expected dom`, () => {
      expect(dom).toEqual(
        <body>
          <header>
            <h1>
              <a href="#">SkitKit</a>
            </h1>
            <nav>
              <a href="#skits">Skits</a>
            </nav>
          </header>
          <article>
            <ul className="text-list">
              <li>
                <a href="#skits/73c87206-7df9-454e-b3d6-2e73237a6d62">
                  Test Skit Name A
                </a>
              </li>
              <li>
                <a href="#skits/b4d4d89f-41b6-476d-954b-7e14d5401b41">
                  Test Skit Name B
                </a>
              </li>
            </ul>
          </article>
          <footer>
            <button>New Skit</button>
          </footer>
        </body>
      );
    });
  });

  describe(`when there are three skits`, () => {
    let dom: JSX.Element;

    beforeAll(() => {
      dom = skitListRouteView({
        skits: [
          {
            uuid: `73c87206-7df9-454e-b3d6-2e73237a6d62`,
            name: `Test Skit Name A`,
          },
          {
            uuid: `b4d4d89f-41b6-476d-954b-7e14d5401b41`,
            name: `Test Skit Name B`,
          },
          {
            uuid: `5fd21596-798c-48a8-9931-ca7feeb7a78e`,
            name: `Test Skit Name C`,
          },
        ],
      });
    });

    it(`returns the expected dom`, () => {
      expect(dom).toEqual(
        <body>
          <header>
            <h1>
              <a href="#">SkitKit</a>
            </h1>
            <nav>
              <a href="#skits">Skits</a>
            </nav>
          </header>
          <article>
            <ul className="text-list">
              <li>
                <a href="#skits/73c87206-7df9-454e-b3d6-2e73237a6d62">
                  Test Skit Name A
                </a>
              </li>
              <li>
                <a href="#skits/b4d4d89f-41b6-476d-954b-7e14d5401b41">
                  Test Skit Name B
                </a>
              </li>
              <li>
                <a href="#skits/5fd21596-798c-48a8-9931-ca7feeb7a78e">
                  Test Skit Name C
                </a>
              </li>
            </ul>
          </article>
          <footer>
            <button>New Skit</button>
          </footer>
        </body>
      );
    });
  });
});
