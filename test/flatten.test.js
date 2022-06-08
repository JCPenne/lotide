const flatten = require('../functions/flatten.js');
const { assert } = require('chai');

describe('#flatten', () => {
  it(`returns [1,2,3] for [1,[2],3]`, () => {
    assert.deepEqual(flatten([1, [2], 3]), [1, 2, 3]);
  });
});
