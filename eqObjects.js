const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion passed: ${actual} === ${expected}`)
    : console.log(`❗️ Assertion failed: ${actual} !== ${expected}`);
};
const eqArrays = function (arg1, arg2) {
  let result = false;
  let checkLength = false;

  arg1.length !== arg2.length ? (checkLength = false) : (checkLength = true);

  if (checkLength === true) {
    for (i in arg1) {
      arg1[i] !== arg2[i] ? (result = false) : (result = true);
    }
  }
  return result;
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    result = false;
  } else {
    for (values of Object.keys(object1)) {
      if (typeof object1[values] !== 'object') {
        object1[values] !== object2[values]
          ? (result = false)
          : (result = true);
      } else {
        result = eqArrays(object1[values], object2[values]);
      }
    }
  }
  return result;
};
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
const cd2 = { c: '1', d: ['2', 3, 4] };

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
