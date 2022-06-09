/**
 * Returns an object after passing each element of an array through a callback function
 * @param {array} array
 * @param {function} callback
 * @returns {array}
 */
const map = (array, callback) => {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};
module.exports = map;
