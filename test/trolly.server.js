import trolly from '../src';

describe('Mocha - server tests *only*', () => {

  it('should be a object', () => {
    expect(typeof trolly).to.be.a.object;
  });

});
