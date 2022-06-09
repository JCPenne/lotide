const _ = require('../index');
const { assert } = require('chai');

describe('#findKeyByValue', () => {
  it(`returns 'drama' for findKeyByValue({drama: 'The Wire'}, 'The Wire'))`, () => {
    assert.strictEqual(_.findKeyByValue({ drama: 'The Wire' }, 'The Wire'), 'drama');
  });
});

//Old test objects used for original Assert functions

// let testObj = {
//   name: 'Jack',
//   age: '32',
//   gender: 'male',
// };

// const bestTVShowsByGenre = {
//   sci_fi: 'The Expanse',
//   comedy: 'Brooklyn Nine-Nine',
//   drama: 'The Wire',
// };
