const takeUntil = function (array, callback) {
  let results = [];
  array.forEach((element, index) => {
    if (callback(element)) {
      results = array.slice(0, index);
    }
  });
  return results;
};

module.exports = takeUntil;

