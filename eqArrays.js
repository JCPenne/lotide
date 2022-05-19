const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion passed: ${actual} === ${expected}`)
    : console.log(`❗️ Assertion failed: ${actual} !== ${expected}`);
};

const eqArrays = function (arg1,arg2) {
  let result = false
  let checkLength = false;

  arg1.length !== arg2.length
    ? checkLength = false
    : checkLength = true
    
  if (checkLength === true) {
    for (i in arg1) {
      arg1[i] !== arg2[i]
      ? result = false
      : result = true
    }
  }
  return result;
};
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1,2,3],[1,2,3]),true);