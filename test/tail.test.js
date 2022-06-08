const tail = require('../functions/tail');
const { assert } = require('chai');

describe('#tail', () => {
  it(`returns [2,3,4] for [1,2,3,4]`, () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it(`returns [b,c,d] for [a,b,c,d]`, () => {
    assert.deepEqual(tail(['a', 'b', 'c', 'd']), ['b', 'c', 'd']);
  });
});
