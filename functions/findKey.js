/**
 * Find and return keys within an object that pass the callback function
 * @param {object} obj
 * @param {function} callback
 * @returns {array} An array of all keys that equal true when passed into the callback function
 */
const findKey = (obj, callback) => {
  resultArr = [];
  for (key in obj) {
    if (callback(obj[key])) {
      resultArr.push(key);
    }
  }
  return resultArr;
};

module.exports = findKey;
