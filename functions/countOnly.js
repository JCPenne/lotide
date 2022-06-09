/**
 * Counts the number of designated items to count in an array.
 * @param {array} sourceArr 
 * @param {array} itemsToCountArr 
 * @returns {object} Key = Each item marked to be counted. Value = Count
 */
const countOnly = (sourceArr, itemsToCountArr) => {
  const result = {};
  for (const item of sourceArr) {
    //If item is set to true within itemsToCountArr & result Object does not already contain the related key, create the
    //key within result Object and set it's count to 1.
    if (itemsToCountArr[item]) {
      if (result[item]) {
        result[item] += 1;
        //If result Object does contain the key, increase it's count by 1.
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};
module.exports = countOnly;
