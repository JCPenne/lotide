/**
 * Traverses an Object to find the key attached to the value parameter
 * @param {object} obj
 * @param {string} value
 * @returns {string} Key name attached to the Value Parameter
 */
const findKeyByValue = (obj, value) => {
  for (keys in obj) {
    if (obj[keys] === value) {
      return keys;
    }
  }
};
module.exports = findKeyByValue;
