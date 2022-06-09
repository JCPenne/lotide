/**
 * Filters out selected items from source array.
 * @param {array} sourceArr
 * @param {array} itemsToRemoveArr
 * @returns {array}
 */
const without = (sourceArr, itemsToRemoveArr) => {
  return sourceArr.filter(keepNumber => !itemsToRemoveArr.includes(keepNumber));
};
module.exports = without;
