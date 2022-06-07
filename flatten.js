
const flatten = function (arr) {
  return arr.flat(1);
};

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, 6]), [1, 2, 3, 4, 5, 6]);
