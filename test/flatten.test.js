const _ = require('../index');
const { assert } = require('chai');

describe('#flatten', () => {
  it(`returns [1,2,3] for [1,[2],3]`, () => {
    assert.deepEqual(_.flatten([1, [2], 3]), [1, 2, 3]);
  });
});
