const without = function (source, itemsToRemove) {
  return source.filter(keepNumber => !itemsToRemove.includes(keepNumber));
};
module.exports = without;
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
// assertArraysEqual(without([1, 2, 3, 4, 5], [1, 3, 5, 4]), [2]);
