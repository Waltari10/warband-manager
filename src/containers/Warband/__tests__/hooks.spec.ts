import * as hooks from '../hooks';


describe('warband hooks', () => {
  it('Should get total rating for warband', () => {

    const val = hooks.useTotalGoldValue({
      id: {
        totalGoldValue: 50,
        // 20 + 5 + 15 == 40
        isLarge: 'true',
        exp: 5,
        startingExp: 15,
      },
      id2: {
        totalGoldValue: 50,
        // 5 + 5 = 10
        isLarge: 'false',
        exp: 5,
        startingExp: 0,
      },
      id3: {
        totalGoldValue: NaN,
        // 5 + 5 = 10
        isLarge: 'false',
        exp: 5,
        startingExp: 0,
      },
    },
    {
      id: {
        totalGoldValue: 50,
        // 5 * (5 + 20) = 125
        count: 5,
        isLarge: 'true',
        exp: 5,
      },
      id2: {
        totalGoldValue: 50,
        // 5 * (5 + 5) = 50
        count: 5,
        isLarge: 'false',
        exp: 5,
      },
      id3: {
        totalGoldValue: NaN,
        // 5 * (5 + 5) = 50
        count: 5,
        isLarge: 'false',
        exp: 5,
      },
    },
    );

    expect(val).toEqual(600);

  });
});