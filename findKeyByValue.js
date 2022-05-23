const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion passed: ${actual} === ${expected}`)
    : console.log(`❗️ Assertion failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function (obj, value) {
  for (keys in obj) {
    if (obj[keys] === value) {
      return keys;
    }
  }
};

let testObj = {
  name: 'Jack',
  age: '32',
  gender: 'male',
};

assertEqual(findKeyByValue(testObj, '32'), 'age');

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
