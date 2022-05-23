const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion passed: ${actual} === ${expected}`)
    : console.log(`❗️ Assertion failed: ${actual} !== ${expected}`);
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    result = false;
  } else {
    for (values of Object.keys(object1)) {
      object1[values] !== object2[values] ? (result = false) : (result = true);
    }
  }
  return result;
};
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
