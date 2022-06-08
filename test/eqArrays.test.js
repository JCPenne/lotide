const eqArrays = require('../functions/eqArrays');
const { assert } = require('chai');

describe('#eqArrays', () => {
  it(`returns true for [1,2,3],[1,2,3]`, () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
  });
});

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true

// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => true
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // => false
