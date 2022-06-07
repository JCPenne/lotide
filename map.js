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

const words = ['ground', 'control', 'to', 'major', 'tom'];
const results = [70, 50, 100, 85, 12, 42];
const lotr = [
  { name: 'gandalf', species: 'wizard' },
  { name: 'Frodo', species: 'hobbit' },
  { name: 'Aragon', species: 'human' },
];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(results, result => result > 70);
const results3 = map(lotr, x => x.species);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results2, [false, false, true, true, false, false]);
// assertArraysEqual(results3, ['wizard', 'hobbit', 'human']);
