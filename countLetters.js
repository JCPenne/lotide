const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion passed: ${actual} === ${expected}`)
    : console.log(`❗️ Assertion failed: ${actual} !== ${expected}`);
};

const countLetters = function(input)