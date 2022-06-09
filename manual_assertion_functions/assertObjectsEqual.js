const _ = require('../index');
/**
 * Checks non-nested objects for strict equality
 * @param {object} actual 
 * @param {object} expected 
 */
const assertObjectsEqual = (actual, expected) => {
  //Uses Node's inspect utility function to improve readability of both Objects when console.logging.
  const inspect = require('util').inspect;
  _.eqObjects(actual, expected)
    ? console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`❗️ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
};
module.exports = assertObjectsEqual;
