const _ = require('../index');
const { assert } = require('chai');
const obj1 = {
  Matrix: { stars: 2 },
  'Top Gun': { stars: 3 },
  Inception: { stars: 5 },
  Tenet: { stars: 5 },
};

describe('#findKey', () => {
  it(`returns ['Inception','Tenet] for obj1, x => x.stars === 5`, () => {
    assert.deepEqual(
      _.findKey(obj1, x => x.stars === 5),
      ['Inception', 'Tenet'],
    );
  });
});
