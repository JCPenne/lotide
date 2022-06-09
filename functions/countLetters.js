/**
 * Count the number of each letter contained within a string
 * @param {string} string
 * @returns {object} Keys = Letters, Values = Count
 */
const countLetters = string => {
  const result = {};
  //Iterate over the input string. If the result Object already contains the relative Key, increase it's count by 1.
  //If it does not, create the related key and set it's count to 1.
  for (letter of string) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
