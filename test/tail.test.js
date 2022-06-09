const _ = require('../index');
const { assert } = require('chai');

describe('#tail', () => {
  it(`returns [2,3,4] for [1,2,3,4]`, () => {
    assert.deepEqual(_.tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it(`returns [b,c,d] for [a,b,c,d]`, () => {
    assert.deepEqual(_.tail(['a', 'b', 'c', 'd']), ['b', 'c', 'd']);
  });
});
