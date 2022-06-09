const _ = require('../index');
const { assert } = require('chai');

describe('#map', () => {
  it(`returns ['g','c'] for ['ground','control'],words, word => word[0]`, () => {
    assert.deepEqual(
      _.map(['ground', 'control'], word => word[0]),
      ['g', 'c'],
    );
  });
});

//Test objects
// const words = ['ground', 'control', 'to', 'major', 'tom'];
// const results = [70, 50, 100, 85, 12, 42];
// const lotr = [
//   { name: 'gandalf', species: 'wizard' },
//   { name: 'Frodo', species: 'hobbit' },
//   { name: 'Aragon', species: 'human' },
// ];

//Test results to push to the original assertArraysEqual function
// const results1 = map(words, word => word[0]);
// const results2 = map(results, result => result > 70);
// const results3 = map(lotr, x => x.species);

//Old test results for orginal Assert functions
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results2, [false, false, true, true, false, false]);
// assertArraysEqual(results3, ['wizard', 'hobbit', 'human']);
