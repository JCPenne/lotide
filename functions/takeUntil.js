/**
 * Returns elements of an array until the callback function returns true.
 * @param {array} array
 * @param {callback} callback
 * @returns {array}
 */
const takeUntil = (array, callback) => {
  let result = [];
  array.forEach((element, index) => {
    if (callback(element)) {
      result = array.slice(0, index);
    }
  });
  return result;
};

module.exports = takeUntil;
