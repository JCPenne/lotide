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
// callback = x => x < 0
const takeUntil = function (array, callback) {
  let results = [];
  array.forEach((element, index) => {
    if (callback(element)) {
      results = array.slice(0, index);
    }
  });
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];
const results2 = takeUntil(data2, x => x === ',');

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);
