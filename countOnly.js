const countOnly = function (allItems, itemsToCount) {
  const results = {};
  //Iterates over allItems and checks if the key exists within results{}, if it doesn't create a key in results showing the item and it's current
  //count amount. If it does, increase the count amount for the relative key.
  for (const item of allItems) {
    // console.log('This is the item : ' + item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  // console.log(`These are the results: ${results}`);
  return results;
};

//Outdated assert arrays/objects to check accuracy

// const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: true,
// });

module.exports = countOnly;
