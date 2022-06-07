const letterPositions = require('../letterPositions');
const { assert } = require('chai');

describe('#letterPositions', () => {
  it(`returns {H: 0, e: 1, l: [2,3],o: 4} for 'Hello`, () => {
    assert.deepEqual(letterPositions('Hello'), { H: [0], e: [1], l: [2, 3], o: [4] });
  });
});
