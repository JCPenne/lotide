/**
 * Returns the inputted array after slicing off the first element.
 * @param {array} arr
 * @returns {array}
 */
const tail = arr => {
  return (arr = arr.slice(1));
};

module.exports = tail;
