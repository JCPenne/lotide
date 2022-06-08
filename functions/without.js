//Takes a source Array and itemsToRemove Array as Parameters.
//Returns the source Array after filtering out all items that exist within the itemsToRemove Array
const without = (sourceArr, itemsToRemoveArr) => {
  //check if each element within sourceArr is not included within itemsToRemoveArr, if it is not, return it.
  return sourceArr.filter(keepNumber => !itemsToRemoveArr.includes(keepNumber));
};
module.exports = without;
