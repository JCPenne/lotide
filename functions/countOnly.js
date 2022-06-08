//Takes a source Array, and an array listing the items to be counted as Parameters.
//Returns a result Object containing all items from the source Array that are to be counted.
const countOnly = (sourceArr, itemsToCountArr) => {
  //Create empty result Object.
  const result = {};
  //Iterate over the sourceArr.
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
