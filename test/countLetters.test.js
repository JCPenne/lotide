const _ = require('../index');
const { assert } = require('chai');

describe('#countLetters', () => {
  it(`returns { L: 2, H: 1 } for 'LHL'`, () => {
    assert.deepEqual(_.countLetters('LHL'), { L: 2, H: 1 });
  });
});
