/**
 * Compares two arrays for strict equality
 * @param {array} arg1
 * @param {array} arg2
 * @returns {boolean}
 */
const eqArrays = (arg1, arg2) => {
  const flatArg1 = flatten(arg1);
  const flatArg2 = flatten(arg2);

  let result = false;
  if (!checkArrayLengths(flatArg1, flatArg2)) {
    return false;
  } else {
    for (i in flatArg1) {
      flatArg1[i] !== flatArg2[i] ? (result = false) : (result = true);
    }
  }
  return result;
};

/**
 * Checks lengths of two arrays for equality
 * @param {array} arg1
 * @param {array} arg2
 * @returns {boolean}
 */
const checkArrayLengths = (arg1, arg2) => {
  let lengthResult = false;
  arg1.length !== arg2.length ? '' : (lengthResult = true);
  return lengthResult;
};
/**
 * Recursively flattens an Array
 * @param {array} arr
 * @returns {array} Flattened Array
 */
const flatten = arr => {
  resultArr = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatten(element);
    } else {
      resultArr.push(element);
    }
  });
  return resultArr;
};
module.exports = eqArrays;
