const eqArrays = function (arg1, arg2) {
  let result = false;
  let checkLength = false;
  let falseFlag = true;

  arg1.length !== arg2.length ? (checkLength = false) : (checkLength = true);

  if (checkLength === true) {
    for (i in arg1) {
      arg1[i] !== arg2[i] ? (falseFlag = false) : (result = true);
    }
    falseFlag === false ? (result = false) : '';
  }
  return result;
};
const assertArraysEqual = function (arr1, arr2) {
  eqArrays(arr1, arr2)
    ? console.log(`✅ Assertion passed: ${arr1} === ${arr2}`)
    : console.log(`❗️ Assertion failed: ${arr1} !== ${arr2}`);
};

const letterPositions = function (sentence) {
  const results = {};

  for (letter = 0; letter < sentence.length; letter++) {
    if (sentence[letter] !== ' ') {
      if (results[sentence[letter]]) {
        results[sentence[letter]].push(letter);
      } else {
        results[sentence[letter]] = [letter];
      }
    }
  }
  console.log(results);
  return results;
};
const result1 = letterPositions('hello my name is Jack');
assertArraysEqual(result1['l'], [2, 3]);
