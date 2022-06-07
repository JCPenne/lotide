const countOnly = function (allItems, itemsToCount) {
  const results = {};

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
const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: true,
});

module.exports = countOnly;

