import rewire = require("rewire");

describe(`eventHandlers`, () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const patchableGlobal = global as any;

  describe(`when navigator.serviceWorker is not defined`, () => {
    let addEventListener: jasmine.Spy;

    beforeAll(() => {
      addEventListener = jasmine.createSpy(`addEventListener`);

      const existingAddEventListener = patchableGlobal.addEventListener;
      const existingNavigator = patchableGlobal.navigator;

      try {
        patchableGlobal.navigator = {};
        patchableGlobal.addEventListener = addEventListener;

        rewire(`.`);
      } finally {
        patchableGlobal.navigator = existingNavigator;
        patchableGlobal.addEventListener = existingAddEventListener;
      }
    });

    it(`does not call addEventListener`, () => {
      expect(addEventListener).not.toHaveBeenCalled();
    });
  });

  describe(`when navigator.serviceWorker is defined`, () => {
    let addEventListener: jasmine.Spy;
    let register: jasmine.Spy;

    beforeAll(() => {
      addEventListener = jasmine.createSpy(`addEventListener`);
      register = jasmine.createSpy(`register`);

      const existingAddEventListener = patchableGlobal.addEventListener;
      const existingNavigator = patchableGlobal.navigator;

      try {
        patchableGlobal.addEventListener = addEventListener;
        patchableGlobal.navigator = { serviceWorker: { register } };

        rewire(`.`);
      } finally {
        patchableGlobal.addEventListener = existingAddEventListener;
        patchableGlobal.navigator = existingNavigator;
      }
    });

    it(`calls addEventListener once`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(1);
    });

    it(`calls addEventListener with a type of "load"`, () => {
      expect(addEventListener).toHaveBeenCalledWith(
        `load`,
        jasmine.any(Function)
      );
    });

    it(`does not call navigator.serviceWorker.register`, () => {
      expect(register).not.toHaveBeenCalled();
    });
  });

  describe(`when navigator.serviceWorker is defined and the document loads`, () => {
    let addEventListener: jasmine.Spy;
    let register: jasmine.Spy;

    beforeAll(() => {
      addEventListener = jasmine.createSpy(`addEventListener`);
      register = jasmine.createSpy(`register`);

      const existingAddEventListener = patchableGlobal.addEventListener;
      const existingNavigator = patchableGlobal.navigator;

      try {
        patchableGlobal.addEventListener = addEventListener;
        patchableGlobal.navigator = { serviceWorker: { register } };

        rewire(`.`);

        addEventListener.calls.argsFor(0)[1]();
      } finally {
        patchableGlobal.addEventListener = existingAddEventListener;
        patchableGlobal.navigator = existingNavigator;
      }
    });

    it(`does not call addEventListener again`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(1);
    });

    it(`calls navigator.serviceWorker.register once`, () => {
      expect(register).toHaveBeenCalledTimes(1);
    });

    it(`calls navigator.serviceWorker.register with the path to the service worker`, () => {
      expect(register).toHaveBeenCalledWith(`service-worker.js`);
    });
  });
});
