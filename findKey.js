const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion passed: ${actual} === ${expected}`)
    : console.log(`❗️ Assertion failed: ${actual} !== ${expected}`);
};

const findKey = function (obj, callback) {
  for (key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const obj1 = {
  Matrix: { stars: 2 },
  'Top Gun': { stars: 3 },
  Inception: { stars: 5 },
};

const obj2 = {
  John: {
    Age: 32,
  },
  Jane: {
    Age: 35,
  },
};

results1 = findKey(obj1, x => x.stars === 5);
results2 = findKey(obj2, x => x.Age > 32);

assertEqual(results1, 'Inception');
assertEqual(results2, 'Jane');
