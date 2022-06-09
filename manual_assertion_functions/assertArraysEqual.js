const eqArrays = require('../functions/eqArrays');

//Takes two Arrays as Parameters.
//Passes them to eqArrays, returns a pass or fail based on the results.
//See eqArrays file for it's functionality.
const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2)
    ? console.log(`✅ Assertion passed: ${arr1} === ${arr2}`)
    : console.log(`❗️ Assertion failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;
