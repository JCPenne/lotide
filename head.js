const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion passed: ${actual} === ${expected}`)
    : console.log(`❗️ Assertion failed: ${actual} !== ${expected}`);
};

const head = function (arr) {
  return arr[0];
};

assertEqual(head([0, 1, 2]), 0);
