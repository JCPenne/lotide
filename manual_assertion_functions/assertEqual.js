//Takes two Primitive Data Types as Parameters.
//Checks for strict equality, returns a pass or fail depending on the result.
//For Array or Object assertion use assertArraysEqual or assertObjectsEqual
const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅ Assertion passed: ${actual} === ${expected}`)
    : console.log(`❗️ Assertion failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
