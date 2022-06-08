const _ = require('./index');

//Takes two objects as Parameters.
//Passes them to eqObjects. Returns a pass or fail based on the result.
const assertObjectsEqual = (actual, expected) => {
  //Uses Node's inspect utility function to improve readability of both Objects when console.logging.
  const inspect = require('util').inspect;
  _.eqObjects(actual, expected)
    ? console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`❗️ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
};
