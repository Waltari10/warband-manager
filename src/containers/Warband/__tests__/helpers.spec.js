import * as helpers from '../helpers';


describe('Helpers', () => {

  it('Should test get henchman level', () => {

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

  it('Should test get hero level', () => {

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


  it('Should test get hero level with starting exp', () => {


    const level = helpers.getHeroAdvancements(5, 20);

    expect(level).toEqual(1);


    const res2 = helpers.getHeroAdvancements(5, 8);

    expect(res2).toEqual(1);


    const res3 = helpers.getHeroAdvancements(30, 8);

    expect(res3).toEqual(8);

  });

});
