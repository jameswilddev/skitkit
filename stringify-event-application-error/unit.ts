import { EventApplicationError } from "../types/event-application-result/event-application-error";
import { stringifyEventApplicationError } from ".";

describe(`applyEvent`, () => {
  function stringifiesAs(
    description: string,
    expectedStringified: string,
    error: EventApplicationError
  ): void {
    describe(description, () => {
      let actualStringified: string;

      beforeAll(() => {
        actualStringified = stringifyEventApplicationError(error);
      });

      it("stringifies as expected", () => {
        expect(actualStringified).toEqual(expectedStringified);
      });
    });
  }

  stringifiesAs(
    `entityDoesNotExist`,
    `Entity emote 8928218c-b222-41ff-b5ef-7ecb0721ed96 does not exist`,
    {
      type: `entityDoesNotExist`,
      entityType: `emote`,
      uuid: `8928218c-b222-41ff-b5ef-7ecb0721ed96`,
    }
  );

  stringifiesAs(
    `entityAlreadyExists`,
    `Entity emote 8928218c-b222-41ff-b5ef-7ecb0721ed96 already exists`,
    {
      type: `entityAlreadyExists`,
      entityType: `emote`,
      uuid: `8928218c-b222-41ff-b5ef-7ecb0721ed96`,
    }
  );

  stringifiesAs(
    `entityIsReferenced`,
    `Entity emote 8928218c-b222-41ff-b5ef-7ecb0721ed96 is referenced by entity character 88c4b5e1-cfce-4e01-b3c8-50196176124c`,
    {
      type: `entityIsReferenced`,
      referencedEntityType: `emote`,
      referencedUuid: `8928218c-b222-41ff-b5ef-7ecb0721ed96`,
      referencingEntityType: `character`,
      referencingUuid: `88c4b5e1-cfce-4e01-b3c8-50196176124c`,
    }
  );

  stringifiesAs(`noEntitiesExist`, `No entities of type emote exist`, {
    type: `noEntitiesExist`,
    entityType: `emote`,
  });

  stringifiesAs(
    `noRelationshipBetweenEntities 2`,
    `No relationship exists between entities emote 8928218c-b222-41ff-b5ef-7ecb0721ed96 and character 88c4b5e1-cfce-4e01-b3c8-50196176124c`,
    {
      type: `noRelationshipBetweenEntities`,
      entities: [
        {
          entityType: `emote`,
          uuid: `8928218c-b222-41ff-b5ef-7ecb0721ed96`,
        },
        {
          entityType: `character`,
          uuid: `88c4b5e1-cfce-4e01-b3c8-50196176124c`,
        },
      ],
    }
  );

  stringifiesAs(
    `noRelationshipBetweenEntities 3`,
    `No relationship exists between entities emote 8928218c-b222-41ff-b5ef-7ecb0721ed96, character 88c4b5e1-cfce-4e01-b3c8-50196176124c and line 361bc0f6-cb7f-4851-955e-c965958144f8`,
    {
      type: `noRelationshipBetweenEntities`,
      entities: [
        {
          entityType: `emote`,
          uuid: `8928218c-b222-41ff-b5ef-7ecb0721ed96`,
        },
        {
          entityType: `character`,
          uuid: `88c4b5e1-cfce-4e01-b3c8-50196176124c`,
        },
        {
          entityType: `line`,
          uuid: `361bc0f6-cb7f-4851-955e-c965958144f8`,
        },
      ],
    }
  );

  stringifiesAs(
    `noRelationshipBetweenEntities 4`,
    `No relationship exists between entities emote 8928218c-b222-41ff-b5ef-7ecb0721ed96, character 88c4b5e1-cfce-4e01-b3c8-50196176124c, line 361bc0f6-cb7f-4851-955e-c965958144f8 and scene 5789ce2c-545d-446e-b841-03b7ed9195d1`,
    {
      type: `noRelationshipBetweenEntities`,
      entities: [
        {
          entityType: `emote`,
          uuid: `8928218c-b222-41ff-b5ef-7ecb0721ed96`,
        },
        {
          entityType: `character`,
          uuid: `88c4b5e1-cfce-4e01-b3c8-50196176124c`,
        },
        {
          entityType: `line`,
          uuid: `361bc0f6-cb7f-4851-955e-c965958144f8`,
        },
        {
          entityType: `scene`,
          uuid: `5789ce2c-545d-446e-b841-03b7ed9195d1`,
        },
      ],
    }
  );

  stringifiesAs(
    `entityIsLastChild`,
    `Entity emote 8928218c-b222-41ff-b5ef-7ecb0721ed96 is the last child of character 88c4b5e1-cfce-4e01-b3c8-50196176124c`,
    {
      type: `entityIsLastChild`,
      childEntityType: `emote`,
      childUuid: `8928218c-b222-41ff-b5ef-7ecb0721ed96`,
      parentEntityType: `character`,
      parentUuid: `88c4b5e1-cfce-4e01-b3c8-50196176124c`,
    }
  );
});
