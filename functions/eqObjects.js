const eqArrays = require('./eqArrays');

/**
 * Checks two objects for strict equality. Order of keys is not taken into account.
 * @param {object} object1
 * @param {object} object2
 * @returns {boolean}
 */
const eqObjects = (object1, object2) => {
  if (!checkObjLengths(object1, object2)) {
    result = false;
  } else {
    for (values of Object.keys(object1)) {
      if (typeof object1[values] !== 'object') {
        object1[values] !== object2[values] ? (result = false) : (result = true);
      } else {
        result = eqArrays(object1[values], object2[values]);
      }
    }
  }
  return result;
};
/**
 * Checks if the amount of keys for two objects are equal.
 * @param {object} obj1
 * @param {object} obj2
 * @returns {boolean}
 */
const checkObjLengths = (obj1, obj2) => {
  let lengthResult = false;
  Object.keys(obj1).length !== Object.keys(obj2).length ? '' : (lengthResult = true);
  return lengthResult;
};

module.exports = eqObjects;
