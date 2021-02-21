import * as helpers from "../helpers";

describe("Helpers", () => {
  it("Should get total rating for warband", () => {
    const res = helpers.getRating(
      {
        id: {
          // 20 + 5 + 15 == 40
          isLarge: "true",
          exp: 5,
          startingExp: 15
        },
        id2: {
          // 5 + 5 = 10
          isLarge: "false",
          exp: 5,
          startingExp: 0
        }
      },
      {
        id: {
          // 5 * (5 + 20) = 125
          count: 5,
          isLarge: "true",
          exp: 5
        },
        id2: {
          // 5 * (5 + 5) = 50
          count: 5,
          isLarge: "false",
          exp: 5
        }
      }
    );

    expect(res).toEqual(225); // 40 + 10 + 125 + 50
  });

  it("Should test get henchman level", () => {
    const level = helpers.getHenchmanAdvancements(1);

    expect(level).toEqual(0);

    const level1 = helpers.getHenchmanAdvancements(2);

    expect(level1).toEqual(1);

    const level2 = helpers.getHenchmanAdvancements(3);

    expect(level2).toEqual(1);

    const level3 = helpers.getHenchmanAdvancements(5);

    expect(level3).toEqual(2);

    const level4 = helpers.getHenchmanAdvancements(14);

    expect(level4).toEqual(4);

    const level5 = helpers.getHenchmanAdvancements(13);

    expect(level5).toEqual(3);
  });

  it("Should test get hero level", () => {
    const level = helpers.getHeroAdvancements(1);

    expect(level).toEqual(0);

    const level1 = helpers.getHeroAdvancements(2);

    expect(level1).toEqual(1);

    const level2 = helpers.getHeroAdvancements(3);

    expect(level2).toEqual(1);

    const level3 = helpers.getHeroAdvancements(5);

    expect(level3).toEqual(2);

    const level4 = helpers.getHeroAdvancements(14);

    expect(level4).toEqual(6);

    const level5 = helpers.getHeroAdvancements(20);

    expect(level5).toEqual(8);

    const level6 = helpers.getHeroAdvancements(40);

    expect(level6).toEqual(12);

    const level7 = helpers.getHeroAdvancements(55);

    expect(level7).toEqual(15);

    const level8 = helpers.getHeroAdvancements(90);

    expect(level8).toEqual(21);
  });

  it("Should test get hero level with starting exp", () => {
    const level = helpers.getHeroAdvancements(5, 20);

    expect(level).toEqual(1);

    const res2_0 = helpers.getHeroAdvancements(0, 8);

    expect(res2_0).toEqual(0);

    const res2_1 = helpers.getHeroAdvancements(1, 8);

    expect(res2_1).toEqual(0);

    const res2_2 = helpers.getHeroAdvancements(2, 8);

    expect(res2_2).toEqual(0);

    const res2_3 = helpers.getHeroAdvancements(3, 8);

    expect(res2_3).toEqual(1);

    const res2 = helpers.getHeroAdvancements(5, 8);

    expect(res2).toEqual(1);

    const res3 = helpers.getHeroAdvancements(30, 8);

    expect(res3).toEqual(8);

    const res4 = helpers.getHeroAdvancements(1, 10);

    expect(res4).toEqual(1);

    const res5 = helpers.getHeroAdvancements(4, 10);

    expect(res5).toEqual(2);

    const res6 = helpers.getHeroAdvancements(0, 10);

    expect(res6).toEqual(0);

    const res7 = helpers.getHeroAdvancements(2, 10);

    expect(res7).toEqual(1);
  });
});
