const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    result = false;
  } else {
    for (values of Object.keys(object1)) {
      if (typeof object1[values] !== 'object') {
        object1[values] !== object2[values]
          ? (result = false)
          : (result = true);
      } else {
        result = eqArrays(object1[values], object2[values]);
      }
    }
  }
  return result;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected)
    ? console.log(
        `✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `❗️ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
};
