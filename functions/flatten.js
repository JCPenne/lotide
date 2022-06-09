const resultArr = [];
/**
 * Recursively flattens an array and returns the result
 * @param {array} arr
 * @returns {array} flattened result
 */
const flatten = arr => {
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatten(element);
    } else {
      resultArr.push(element);
    }
  });
  return resultArr;
};

module.exports = flatten;
