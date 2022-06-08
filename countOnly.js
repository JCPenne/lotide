const countOnly = function (allItems, itemsToCount) {
  const results = {};
  //Iterates over allItems and checks if the key exists within results{}, if it doesn't create a key in results showing the item and it's current
  //count amount. If it does, increase the count amount for the relative key.
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;
