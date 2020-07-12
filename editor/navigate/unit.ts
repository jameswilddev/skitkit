import { navigate } from ".";

describe(`navigate`, () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const patchableGlobal = global as any;

  type TestLocation = {
    readonly hash: string;
    readonly other: string;
  };

  let previousLocation: TestLocation;
  let nextLocation: TestLocation;

  beforeAll(() => {
    const existingLocation = patchableGlobal.location;

    previousLocation = { hash: `Test Previous Hash`, other: `Test Other` };

    try {
      patchableGlobal.location = previousLocation;

      navigate(`Test Next Hash`);

      nextLocation = patchableGlobal.location;
    } finally {
      patchableGlobal.location = existingLocation;
    }
  });

  it(`does not replace location`, () => {
    expect(nextLocation).toBe(previousLocation);
  });

  it(`does not replace things other than the hash`, () => {
    expect(previousLocation.hash).toEqual(`Test Next Hash`);
  });

  it(`replaces the hash`, () => {
    expect(previousLocation.other).toEqual(`Test Other`);
  });
});
