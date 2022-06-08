

//Takes two Arrays as Parameters, an Array to iterate over, and a selection of items within the first Array that are to be counted.
const countOnly = (allItems, itemsToCount) => {
  //empty Object to return as the final result.
  const result = {};
  //Iterate over the allItems. If item is set to true within itemsToCount & result Object does not already contain the related key, create the
  //key within result Object and set it's count to 1. If result Object does contain the key, increase it's count by 1.
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};
module.exports = countOnly;
