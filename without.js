const without = function (source, itemsToRemove) {
  return source.filter(keepNumber => !itemsToRemove.includes(keepNumber));
};
module.exports = without;
