const _ = require('../index');
const { assert } = require('chai');

describe('#eqObjects', () => {
  it(`returns true for {c: '1', d: 1, e: 'abc'},{e: 'abc', c: '1', d: 1}`, () => {
    assert.deepEqual(_.eqObjects({ c: '1', d: 1, e: 'abc' }, { e: 'abc', c: '1', d: 1 }), true);
  });
});

// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// const abc = { a: '1', b: '2', c: '3' };

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: '1', d: ['2', 3] };
// const dc = { d: ['2', 3], c: '1' };
// const cd2 = { c: '1', d: ['2', 3, 4] };

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
