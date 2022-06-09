const _ = require('../index');
const { assert } = require('chai');

describe('#takeUntil', () => {
  it(`returns [1,2,5] for [1,2,5,-1],x => x < 0`, () => {
    assert.deepEqual(
      _.takeUntil([1, 2, 5, -1], x => x < 0),
      [1, 2, 5],
    );
  });
});

//Old objects and variables to test with original assert functions

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = [
//   "I've",
//   'been',
//   'to',
//   'Hollywood',
//   ',',
//   "I've",
//   'been',
//   'to',
//   'Redwood',
// ];
// const results1 = takeUntil(data1, x => x < 0);
// const results2 = takeUntil(data2, x => x === ',');

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);
