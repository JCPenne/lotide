const eqObjects = require('../eqObjects');
const { assert } = require('chai');

describe('#eqObjects', () => {
  it(`returns true for {c: '1', d: 1, e: 'abc},{e: 'abc', c: '1', d: 1}`, () => {
    assert.deepEqual(eqObjects({ c: '1', d: 1, e: 'abc' }, { e: 'abc', c: '1', d: 1 }), true);
  });
});
