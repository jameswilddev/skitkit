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
    lines: {
      "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
        sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
        text: `Test Line Text A A`,
        characters: {
          "b3605166-7722-40d8-bea5-084b708f232b": {
            emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
          },
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
            emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
          },
        },
      },
      "b041457d-eb71-4b95-a0d6-f5f95c722099": {
        sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
        text: `Test Line Text B A`,
        characters: {
          "b3605166-7722-40d8-bea5-084b708f232b": {
            emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
          },
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
            emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          },
        },
      },
      "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
        sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
        text: `Test Line Text A B`,
        characters: {
          "b3605166-7722-40d8-bea5-084b708f232b": {
            emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
          },
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
            emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          },
        },
      },
      "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
        sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
        text: `Test Line Text A C`,
        characters: {
          "b3605166-7722-40d8-bea5-084b708f232b": {
            emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
          },
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
            emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
          },
        },
      },
      "cf09fd34-f6c4-4333-9251-8541136df97d": {
        sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
        text: `Test Line Text B B`,
        characters: {
          "b3605166-7722-40d8-bea5-084b708f232b": {
            emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
          },
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
            emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
          },
        },
      },
      "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
        sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
        text: `Test Line Text A D`,
        characters: {
          "b3605166-7722-40d8-bea5-084b708f232b": {
            emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
          },
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
            emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          },
        },
      },
    },
    scenes: {
      "7bf8f58c-2631-4bc0-98b7-2935671af646": {
        name: `Test Scene A Name`,
        backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
        lineUuids: [
          `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
          `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
          `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
          `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
        ],
      },
      "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
        name: `Test Scene B Name`,
        backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
        lineUuids: [
          `b041457d-eb71-4b95-a0d6-f5f95c722099`,
          `cf09fd34-f6c4-4333-9251-8541136df97d`,
        ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
                "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
                  emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
                "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
                  emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
                "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
                  emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
                "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
                  emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
                "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
                  emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
                "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
                  emoteUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
      `when the emote exists and is referenced by a line`,
      previousState,
      {
        type: `deleteEmote`,
        emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
      },
      {
        successful: false,
        error: {
          type: `entityIsReferenced`,
          referencedEntityType: `emote`,
          referencedUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
          referencingEntityType: `line`,
          referencingUuid: `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
        },
      }
    );

    scenario(
      `when the emote exists and is not referenced by any lines`,
      previousState,
      {
        type: `deleteEmote`,
        emoteUuid: `7659d45f-f986-4b3b-9552-acc302567666`,
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
            },
          },
        },
      }
    );
  });

  describe(`updateLineText`, () => {
    scenario(
      `when the line does not exist`,
      previousState,
      {
        type: `updateLineText`,
        lineUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        text: `Test Updated Text`,
      },
      {
        successful: false,
        error: {
          type: `entityDoesNotExist`,
          entityType: `line`,
          uuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        },
      }
    );

    scenario(
      `when the line exists`,
      previousState,
      {
        type: `updateLineText`,
        lineUuid: `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
        text: `Test Updated Text`,
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Updated Text`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
        lines: {
          "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
            sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
            text: `Test Line Text A A`,
            characters: {
              "b3605166-7722-40d8-bea5-084b708f232b": {
                emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              },
              "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
              },
            },
          },
          "b041457d-eb71-4b95-a0d6-f5f95c722099": {
            sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
            text: `Test Line Text B A`,
            characters: {
              "b3605166-7722-40d8-bea5-084b708f232b": {
                emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              },
              "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
              },
            },
          },
          "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
            sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
            text: `Test Line Text A B`,
            characters: {
              "b3605166-7722-40d8-bea5-084b708f232b": {
                emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
              },
              "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
              },
            },
          },
          "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
            sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
            text: `Test Line Text A C`,
            characters: {
              "b3605166-7722-40d8-bea5-084b708f232b": {
                emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              },
              "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
              },
            },
          },
          "cf09fd34-f6c4-4333-9251-8541136df97d": {
            sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
            text: `Test Line Text B B`,
            characters: {
              "b3605166-7722-40d8-bea5-084b708f232b": {
                emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              },
              "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
              },
            },
          },
          "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
            sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
            text: `Test Line Text A D`,
            characters: {
              "b3605166-7722-40d8-bea5-084b708f232b": {
                emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
              },
              "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
              },
            },
          },
        },
        scenes: {
          "7bf8f58c-2631-4bc0-98b7-2935671af646": {
            name: `Test Scene A Name`,
            backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
            lineUuids: [
              `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
              `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
              `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
              `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
            ],
          },
          "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
            name: `Test Scene B Name`,
            backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
            lineUuids: [
              `b041457d-eb71-4b95-a0d6-f5f95c722099`,
              `cf09fd34-f6c4-4333-9251-8541136df97d`,
            ],
          },
        },
      },
      {
        type: `createScene`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        backgroundUuid: `dcda5431-22a5-4724-a302-5b1ebda65160`,
        characterEmoteUuids: {
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          "b3605166-7722-40d8-bea5-084b708f232b": `7659d45f-f986-4b3b-9552-acc302567666`,
        },
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
        backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
        characterEmoteUuids: {
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          "b3605166-7722-40d8-bea5-084b708f232b": `7659d45f-f986-4b3b-9552-acc302567666`,
        },
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
      `when the line already exists`,
      previousState,
      {
        type: `createScene`,
        sceneUuid: `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
        backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
        characterEmoteUuids: {
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          "b3605166-7722-40d8-bea5-084b708f232b": `7659d45f-f986-4b3b-9552-acc302567666`,
        },
      },
      {
        successful: false,
        error: {
          type: `entityAlreadyExists`,
          entityType: `line`,
          uuid: `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
        },
      }
    );

    scenario(
      `when the background does not exist`,
      previousState,
      {
        type: `createScene`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        backgroundUuid: `dcda5431-22a5-4724-a302-5b1ebda65160`,
        characterEmoteUuids: {
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          "b3605166-7722-40d8-bea5-084b708f232b": `7659d45f-f986-4b3b-9552-acc302567666`,
        },
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
              text: `(this line is yet to be written)`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `7659d45f-f986-4b3b-9552-acc302567666`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              name: `Untitled Scene`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [`0caec469-eaad-4bca-81ed-50ca4994c4bf`],
            },
          },
        },
      }
    );

    scenario(
      `when the background exists and the scene and line do not exist and the character emote set is an exact match`,
      previousState,
      {
        type: `createScene`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
        characterEmoteUuids: {
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          "b3605166-7722-40d8-bea5-084b708f232b": `7659d45f-f986-4b3b-9552-acc302567666`,
        },
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
              text: `(this line is yet to be written)`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `7659d45f-f986-4b3b-9552-acc302567666`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              name: `Untitled Scene`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [`0caec469-eaad-4bca-81ed-50ca4994c4bf`],
            },
          },
        },
      }
    );

    scenario(
      `when a character emote does not exist`,
      previousState,
      {
        type: `createScene`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
        characterEmoteUuids: {
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          "b3605166-7722-40d8-bea5-084b708f232b": `aa863d0b-e881-4c08-bc7b-60e83a361509`,
        },
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
              text: `(this line is yet to be written)`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              name: `Untitled Scene`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [`0caec469-eaad-4bca-81ed-50ca4994c4bf`],
            },
          },
        },
      }
    );

    scenario(
      `when a character is present in the event but not the state`,
      previousState,
      {
        type: `createScene`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
        characterEmoteUuids: {
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          "b3605166-7722-40d8-bea5-084b708f232b": `7659d45f-f986-4b3b-9552-acc302567666`,
          "81f015a2-48bd-4b3a-ba2b-95057e6142c0": `6e45bbd2-13e0-4f3e-98fc-3c4eea4832be`,
        },
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
              text: `(this line is yet to be written)`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `7659d45f-f986-4b3b-9552-acc302567666`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              name: `Untitled Scene`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [`0caec469-eaad-4bca-81ed-50ca4994c4bf`],
            },
          },
        },
      }
    );

    scenario(
      `when a character emote is from another character`,
      previousState,
      {
        type: `createScene`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
        characterEmoteUuids: {
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": `bb858818-ce29-4277-aafc-e1a2a1eef567`,
          "b3605166-7722-40d8-bea5-084b708f232b": `05f82a94-24f1-42c4-8469-4a864cd29956`,
        },
      },
      {
        successful: false,
        error: {
          type: `noRelationshipBetweenEntities`,
          entities: [
            {
              entityType: `character`,
              uuid: `b3605166-7722-40d8-bea5-084b708f232b`,
            },
            {
              entityType: `emote`,
              uuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
            },
          ],
        },
      }
    );

    scenario(
      `when a character is present in the state but not the event`,
      previousState,
      {
        type: `createScene`,
        sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
        backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
        characterEmoteUuids: {
          "a7c1ef75-0b1c-4757-a71b-f7acf510441e": `bb858818-ce29-4277-aafc-e1a2a1eef567`,
        },
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              sceneUuid: `0caec469-eaad-4bca-81ed-50ca4994c4bf`,
              text: `(this line is yet to be written)`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
            },
            "0caec469-eaad-4bca-81ed-50ca4994c4bf": {
              name: `Untitled Scene`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [`0caec469-eaad-4bca-81ed-50ca4994c4bf`],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Scene B Name`,
              backgroundUuid: `16d51cce-90ae-44ee-8b28-9987d0692547`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
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
          lines: {
            "87ab1aa3-de6d-46f5-9927-1807c4894e54": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "b041457d-eb71-4b95-a0d6-f5f95c722099": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B A`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "4306f2df-7aa7-42ac-b3d5-0dd61caf0004": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `19408a33-a366-4879-8a9a-26f19c6a9037`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
            "bab0f2da-8de8-4034-bd05-e81ff5405f63": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A C`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "cf09fd34-f6c4-4333-9251-8541136df97d": {
              sceneUuid: `5588a02c-9078-404f-a50c-f1b32ea1f32b`,
              text: `Test Line Text B B`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `05f82a94-24f1-42c4-8469-4a864cd29956`,
                },
              },
            },
            "7a3e8d1b-9472-43ce-b70e-3a34b52f49ab": {
              sceneUuid: `7bf8f58c-2631-4bc0-98b7-2935671af646`,
              text: `Test Line Text A D`,
              characters: {
                "b3605166-7722-40d8-bea5-084b708f232b": {
                  emoteUuid: `b3a44063-56bf-4b7b-a5e9-1ca783427b15`,
                },
                "a7c1ef75-0b1c-4757-a71b-f7acf510441e": {
                  emoteUuid: `bb858818-ce29-4277-aafc-e1a2a1eef567`,
                },
              },
            },
          },
          scenes: {
            "7bf8f58c-2631-4bc0-98b7-2935671af646": {
              name: `Test Scene A Name`,
              backgroundUuid: `357f38d8-5fbe-41d1-baf8-851d4dfccf86`,
              lineUuids: [
                `7a3e8d1b-9472-43ce-b70e-3a34b52f49ab`,
                `4306f2df-7aa7-42ac-b3d5-0dd61caf0004`,
                `bab0f2da-8de8-4034-bd05-e81ff5405f63`,
                `87ab1aa3-de6d-46f5-9927-1807c4894e54`,
              ],
            },
            "5588a02c-9078-404f-a50c-f1b32ea1f32b": {
              name: `Test Updated Name`,
              backgroundUuid: `3644b39f-a928-4114-9dbc-8a502d99af0d`,
              lineUuids: [
                `b041457d-eb71-4b95-a0d6-f5f95c722099`,
                `cf09fd34-f6c4-4333-9251-8541136df97d`,
              ],
            },
          },
        },
      }
    );
  });
});
