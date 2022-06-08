const eqObjects = require('./eqObjects.js');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected)
    ? console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`❗️ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
};
