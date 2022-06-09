const _ = require('../index');
const { assert } = require('chai');

describe('#middle', () => {
  it(`returns 3 for [1,2,3,4,5]`, () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
  });
  it(`returns [3,4] for [1,2,3,4,5,6]`, () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it(`returns [1] for [1]`, () => {
    assert.deepEqual(_.middle([1]), [1]);
  });
  it(`returns 'No middle available' for [1,2]`, () => {
    assert.strictEqual(_.middle([1, 2]), `No middle available`);
  });
});

// assertArraysEqual(middle([0, 1, 2, 3, 4]), [2]);
// assertArraysEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);
