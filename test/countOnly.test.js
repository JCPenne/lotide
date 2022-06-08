const countOnly = require('../functions/countOnly');
const { assert } = require('chai');

describe('#countOnly', () => {
  it(`returns {John: 1} for ['John','Jane'],{John: true}`, () => {
    assert.deepEqual(countOnly(['John', 'Jane'], { John: true }), { John: 1 });
  });
});

// const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: true,
// });
// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], undefined);
// assertEqual(result1['Fang'], 2);
// assertEqual(result1['Agouhanna'], 1);