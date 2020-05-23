import { applyEvent, EventApplicationResult, EventSchema, State } from "..";

describe(`applyEvent`, () => {
  const previousState: State = {
    backgrounds: {
      "16d51cce-90ae-44ee-8b28-9987d0692547": {
        name: `Test Unused Background Name`,
        svg: `Test Unused Background Svg`,
      },
      "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
        name: `Test Used Background Name`,
        svg: `Test Used Background Svg`,
      },
      "3644b39f-a928-4114-9dbc-8a502d99af0d": {
        name: `Test Background C Name`,
        svg: `Test Background C Svg`,
      },
    },
    characters: {
      "b3605166-7722-40d8-bea5-084b708f232b": {
        name: `Test Character A Name`,
        emoteUuids: [
          `19408a33-a366-4879-8a9a-26f19c6a9037`,
          `7659d45f-f986-4b3b-9552-acc302567666`,
          `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
        ],
      },
      "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
        name: `Test Character B Name`,
        emoteUuids: [
          `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          `05f82a94-24f1-42c4-8469-4a864cd29956`,
        ],
      },
    },
    emotes: {
      "19408a33-a366-4879-8a9a-26f19c6a9037": {
        characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
        name: `Test Emote A A Name`,
        svg: `Test Emote A A Svg`,
      },
      "7659d45f-f986-4b3b-9552-acc302567666": {
        characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
        name: `Test Emote A B Name`,
        svg: `Test Emote A B Svg`,
      },
      "bb858818-ce29-4277-aafc-e1a2a1eef567": {
        characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
        name: `Test Emote B A Name`,
        svg: `Test Emote B A Svg`,
      },
      "05f82a94-24f1-42c4-8469-4a864cd29956": {
        characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
        name: `Test Emote B B Name`,
        svg: `Test Emote B B Svg`,
      },
      "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
        characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
        name: `Test Emote A C Name`,
        svg: `Test Emote A C Svg`,
      },
    },
    scenes: {
      "7bf8f58c-2631-4bc0-98b7-2935671af646": {
        name: `Test Scene A Name`,
        backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
      },
      "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
        name: `Test Scene B Name`,
        backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
      },
    },
  };

  function scenario(
    description: string,
    state: State,
    event: EventSchema,
    result: EventApplicationResult
  ): void {
    describe(description, () => {
      let actualResult: EventApplicationResult;

      beforeAll(() => {
        actualResult = applyEvent(state, event);
      });

      it(`returns the expected result`, () => {
        expect(actualResult).toEqual(result);
      });
    });
  }

  describe(`createBackground`, () => {
    scenario(
      `when the background already exists`,
      previousState,
      {
        type: `createBackground`,
        backgroundUuid: `16d51cce-90ae-44ee-8b28-9987d0692547`,
      },
      {
        successful: false,
        error: {
          type: `entityAlreadyExists`,
          entityType: `background`,
          uuid: `16d51cce-90ae-44ee-8b28-9987d0692547`,
        },
      }
    );

    scenario(
      `when the background does not yet exist`,
      previousState,
      {
        type: `createBackground`,
        backgroundUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              name: `Untitled Background`,
              svg: `<svg xmlns="http://www.w3.org/2000/svg" height="256" width="256"><defs><linearGradient y2="256" x2="256" y1="0" x1="0" id="A" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="red"/><stop offset=".375" stop-color="#ff0"/><stop offset=".5" stop-color="#0f0"/><stop offset=".625" stop-color="#0ff"/><stop offset="1" stop-color="#00f"/></linearGradient></defs><rect x="0" y="0" width="256" height="256" fill="url(#A)"/><rect x="16" y="16" width="224" height="224" fill="#fff"/><text y="128" x="128" font-size="16" font-family="sans-serif" dominant-baseline="middle" text-anchor="middle">PLACEHOLDER</text></svg>`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`deleteBackground`, () => {
    scenario(
      `when the background does not exist`,
      previousState,
      {
        type: `deleteBackground`,
        backgroundUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `background`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the background is referenced by a scene`,
      previousState,
      {
        type: `deleteBackground`,
        backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
      },
      {
        successful: false,
        error: {
          type: `entityIsReferenced`,
          referencedEntityType: `background`,
          referencedUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
          referencingEntityType: `scene`,
          referencingUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
        },
      }
    );

    scenario(
      `when the background is not used`,
      previousState,
      {
        type: `deleteBackground`,
        backgroundUuid: `16d51cce-90ae-44ee-8b28-9987d0692547`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`updateBackgroundName`, () => {
    scenario(
      `when the background does not exist`,
      previousState,
      {
        type: `updateBackgroundName`,
        backgroundUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        name: `Test Updated Name`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `background`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the background exists`,
      previousState,
      {
        type: `updateBackgroundName`,
        backgroundUuid: `16d51cce-90ae-44ee-8b28-9987d0692547`,
        name: `Test Updated Name`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Updated Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`updateBackgroundSvg`, () => {
    scenario(
      `when the background does not exist`,
      previousState,
      {
        type: `updateBackgroundSvg`,
        backgroundUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        svg: `Test Updated Svg`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `background`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the background exists`,
      previousState,
      {
        type: `updateBackgroundSvg`,
        backgroundUuid: `16d51cce-90ae-44ee-8b28-9987d0692547`,
        svg: `Test Updated Svg`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Updated Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`createCharacter`, () => {
    scenario(
      `when the character exists`,
      previousState,
      {
        type: `createCharacter`,
        characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
      },
      {
        successful: false,
        error: {
          type: `entityAlreadyExists`,
          entityType: `character`,
          uuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
        },
      }
    );

    scenario(
      `when the emote exists`,
      previousState,
      {
        type: `createCharacter`,
        characterUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
      },
      {
        successful: false,
        error: {
          type: `entityAlreadyExists`,
          entityType: `emote`,
          uuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
        },
      }
    );

    scenario(
      `when neither the character nor emote exists`,
      previousState,
      {
        type: `createCharacter`,
        characterUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              name: `Untitled Character`,
              emoteUuids: [`0caec469-eaad-4bca-81ed-50ca4994c4bf`],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              characterUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
              name: `Untitled Emote`,
              svg: `<svg xmlns="http://www.w3.org/2000/svg" height="256" width="256"><defs><linearGradient y2="256" x2="256" y1="0" x1="0" id="A" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="red"/><stop offset=".375" stop-color="#ff0"/><stop offset=".5" stop-color="#0f0"/><stop offset=".625" stop-color="#0ff"/><stop offset="1" stop-color="#00f"/></linearGradient></defs><rect x="0" y="0" width="256" height="256" fill="url(#A)"/><rect x="16" y="16" width="224" height="224" fill="#fff"/><text y="128" x="128" font-size="16" font-family="sans-serif" dominant-baseline="middle" text-anchor="middle">PLACEHOLDER</text></svg>`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`deleteCharacter`, () => {
    scenario(
      `when the character does not exist`,
      previousState,
      {
        type: `deleteCharacter`,
        characterUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `character`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the character exists`,
      previousState,
      {
        type: `deleteCharacter`,
        characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`updateCharacterName`, () => {
    scenario(
      `when the character does not exist`,
      previousState,
      {
        type: `updateCharacterName`,
        characterUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        name: `Test Updated Name`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `character`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the character exists`,
      previousState,
      {
        type: `updateCharacterName`,
        characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
        name: `Test Updated Name`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Updated Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`createEmote`, () => {
    scenario(
      `when the emote already exists`,
      previousState,
      {
        type: `createEmote`,
        characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
        emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
      },
      {
        successful: false,
        error: {
          type: `entityAlreadyExists`,
          entityType: `emote`,
          uuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
        },
      }
    );

    scenario(
      `when the character does not exist`,
      previousState,
      {
        type: `createEmote`,
        characterUuid: `b2a84bc2-df84-4517-ae30-b10d8fbd4638`,
        emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `character`,
          uuid: `b2a84bc2-df84-4517-ae30-b10d8fbd4638`,
        },
      }
    );

    scenario(
      `when the emote does not exist and the character exists`,
      previousState,
      {
        type: `createEmote`,
        characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
        emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
                `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Untitled Emote`,
              svg: `<svg xmlns="http://www.w3.org/2000/svg" height="256" width="256"><defs><linearGradient y2="256" x2="256" y1="0" x1="0" id="A" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="red"/><stop offset=".375" stop-color="#ff0"/><stop offset=".5" stop-color="#0f0"/><stop offset=".625" stop-color="#0ff"/><stop offset="1" stop-color="#00f"/></linearGradient></defs><rect x="0" y="0" width="256" height="256" fill="url(#A)"/><rect x="16" y="16" width="224" height="224" fill="#fff"/><text y="128" x="128" font-size="16" font-family="sans-serif" dominant-baseline="middle" text-anchor="middle">PLACEHOLDER</text></svg>`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`deleteEmote`, () => {
    scenario(
      `when the emote does not exist`,
      previousState,
      {
        type: `deleteEmote`,
        emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `emote`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the emote exists`,
      previousState,
      {
        type: `deleteEmote`,
        emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [`05f82a94-24f1-42c4-8469-4a864cd29956`],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`updateEmoteName`, () => {
    scenario(
      `when the emote does not exist`,
      previousState,
      {
        type: `updateEmoteName`,
        emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        name: `Test Updated Name`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `emote`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the emote exists`,
      previousState,
      {
        type: `updateEmoteName`,
        emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
        name: `Test Updated Name`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Updated Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`updateEmoteSvg`, () => {
    scenario(
      `when the emote does not exist`,
      previousState,
      {
        type: `updateEmoteSvg`,
        emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        svg: `Test Updated Svg`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `emote`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the emote exists`,
      previousState,
      {
        type: `updateEmoteSvg`,
        emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
        svg: `Test Updated Svg`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Updated Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`createScene`, () => {
    scenario(
      `when no backgrounds exist`,
      {
        backgrounds: {},
        characters: {
          "b3605166-7722-40d8-bea5-084b708f232b": {
            name: `Test Character A Name`,
            emoteUuids: [
              `19408a33-a366-4879-8a9a-26f19c6a9037`,
              `7659d45f-f986-4b3b-9552-acc302567666`,
              `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
            ],
          },
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
            name: `Test Character B Name`,
            emoteUuids: [
              `bb858818-ce29-4277-aafc-e1a2a1eef567`,
              `05f82a94-24f1-42c4-8469-4a864cd29956`,
            ],
          },
        },
        emotes: {
          "19408a33-a366-4879-8a9a-26f19c6a9037": {
            characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
            name: `Test Emote A A Name`,
            svg: `Test Emote A A Svg`,
          },
          "7659d45f-f986-4b3b-9552-acc302567666": {
            characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
            name: `Test Emote A B Name`,
            svg: `Test Emote A B Svg`,
          },
          "bb858818-ce29-4277-aafc-e1a2a1eef567": {
            characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
            name: `Test Emote B A Name`,
            svg: `Test Emote B A Svg`,
          },
          "05f82a94-24f1-42c4-8469-4a864cd29956": {
            characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
            name: `Test Emote B B Name`,
            svg: `Test Emote B B Svg`,
          },
          "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
            characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
            name: `Test Emote A C Name`,
            svg: `Test Emote A C Svg`,
          },
        },
        scenes: {
          "7bf8f58c-2631-4bc0-98b7-2935671af646": {
            name: `Test Scene A Name`,
            backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
          },
          "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
            name: `Test Scene B Name`,
            backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
          },
        },
      },
      {
        type: `createScene`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: false,
        error: {
          type: `noEntitiesExist`,
          entityType: `background`,
        },
      }
    );

    scenario(
      `when the scene already exists`,
      previousState,
      {
        type: `createScene`,
        sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
      },
      {
        successful: false,
        error: {
          type: `entityAlreadyExists`,
          entityType: `scene`,
          uuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
        },
      }
    );

    scenario(
      `when at least one background exists and the scene does not exist`,
      previousState,
      {
        type: `createScene`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              name: `Untitled Scene`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });

  describe(`deleteScene`, () => {
    scenario(
      `when the scene does not exist`,
      previousState,
      {
        type: `deleteScene`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `scene`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the scene exists`,
      previousState,
      {
        type: `deleteScene`,
        sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
          },
        },
      }
    );
  });

  describe(`updateSceneBackground`, () => {
    scenario(
      `when the scene does not exist`,
      previousState,
      {
        type: `updateSceneBackground`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        backgroundUuid: `16d51cce-90ae-44ee-8b28-9987d0692547`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `scene`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the background does not exist`,
      previousState,
      {
        type: `updateSceneBackground`,
        sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
        backgroundUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `background`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the scene and background exist`,
      previousState,
      {
        type: `updateSceneBackground`,
        sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
        backgroundUuid: `16d51cce-90ae-44ee-8b28-9987d0692547`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `16d51cce-90ae-44ee-8b28-9987d0692547`,
            },
          },
        },
      }
    );
  });

  describe(`updateSceneName`, () => {
    scenario(
      `when the scene does not exist`,
      previousState,
      {
        type: `updateSceneName`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        name: `Test Updated Name`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `scene`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the scene exists`,
      previousState,
      {
        type: `updateSceneName`,
        sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
        name: `Test Updated Name`,
      },
      {
        successful: true,
        state: {
          backgrounds: {
            "16d51cce-90ae-44ee-8b28-9987d0692547": {
              name: `Test Unused Background Name`,
              svg: `Test Unused Background Svg`,
            },
            "357f38d8-5fbe-41d1-baf8-851d4dfccf86": {
              name: `Test Used Background Name`,
              svg: `Test Used Background Svg`,
            },
            "3644b39f-a928-4114-9dbc-8a502d99af0d": {
              name: `Test Background C Name`,
              svg: `Test Background C Svg`,
            },
          },
          characters: {
            "b3605166-7722-40d8-bea5-084b708f232b": {
              name: `Test Character A Name`,
              emoteUuids: [
                `19408a33-a366-4879-8a9a-26f19c6a9037`,
                `7659d45f-f986-4b3b-9552-acc302567666`,
                `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              ],
            },
            "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
              name: `Test Character B Name`,
              emoteUuids: [
                `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                `05f82a94-24f1-42c4-8469-4a864cd29956`,
              ],
            },
          },
          emotes: {
            "19408a33-a366-4879-8a9a-26f19c6a9037": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A A Name`,
              svg: `Test Emote A A Svg`,
            },
            "7659d45f-f986-4b3b-9552-acc302567666": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A B Name`,
              svg: `Test Emote A B Svg`,
            },
            "bb858818-ce29-4277-aafc-e1a2a1eef567": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B A Name`,
              svg: `Test Emote B A Svg`,
            },
            "05f82a94-24f1-42c4-8469-4a864cd29956": {
              characterUuid: `a7c1ef75-0b1c-4757-a71b-f7acf510441e`,
              name: `Test Emote B B Name`,
              svg: `Test Emote B B Svg`,
            },
            "b3a44063-56bf-4b7b-a5e9-1ca783427b15": {
              characterUuid: `b3605166-7722-40d8-bea5-084b708f232b`,
              name: `Test Emote A C Name`,
              svg: `Test Emote A C Svg`,
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Updated Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            },
          },
        },
      }
    );
  });
});
