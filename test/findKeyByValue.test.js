const findKeyByValue = require('../findKeyByValue');
const { assert } = require('chai');

describe('#findKeyByValue', () => {
  it(`returns 'drama' for findKeyByValue({drama: 'The Wire'}, 'The Wire'))`, () => {
    assert.strictEqual(findKeyByValue({ drama: 'The Wire' }, 'The Wire'), 'drama');
  });
});
