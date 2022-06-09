/**
 * Checks primitive data for strict equality.
 * @param {primitive} actual
 * @param {primitive} expected
 */
const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅ Assertion passed: ${actual} === ${expected}`)
    : console.log(`❗️ Assertion failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
