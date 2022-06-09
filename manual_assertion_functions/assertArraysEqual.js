const _ = require('../index');
/**
 * Checks two arrays for strict equality
 * @param {array} arr1
 * @param {array} arr2
 */
const assertArraysEqual = (arr1, arr2) => {
  _.eqArrays(arr1, arr2)
    ? console.log(`✅ Assertion passed: ${arr1} === ${arr2}`)
    : console.log(`❗️ Assertion failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;
