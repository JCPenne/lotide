const without = require('../without');
const { assert } = require('chai');

describe('#without', () => {
  it(`returns [2,3] for [1,2,3],[1]`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});
