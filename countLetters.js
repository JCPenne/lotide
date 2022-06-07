const countLetters = function (input) {
  const result = {};

  for (letters of input) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
