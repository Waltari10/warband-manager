import { getLoginTo } from '../component';


describe('private route', () => {
  it('Should get login to ', () => {

    const res = getLoginTo('location');

    expect(res).toEqual({
      pathname: '/login',
      state: { from: 'location' },
    });

  });
});