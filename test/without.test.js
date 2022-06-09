const _ = require('../index');
const { assert } = require('chai');

describe('#without', () => {
  it(`returns [2,3] for [1,2,3],[1]`, () => {
    assert.deepEqual(_.without([1, 2, 3], [1]), [2, 3]);
  });
});
// Old assert function tests

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
// assertArraysEqual(without([1, 2, 3, 4, 5], [1, 3, 5, 4]), [2]);
