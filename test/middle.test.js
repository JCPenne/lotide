const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([0, 1, 2, 3, 4]), [2]);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);
