//Takes a String as a Parameter.
//Returns an object containing the count of each letter within the input string.
const countLetters = string => {
  //empty Object to return as the final result.
  const result = {};
  //Iterate over the input string. If the result Object already contains the relative Key, increase it's count by 1. If it does not, create
  //the related key and set it's count to 1.
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
