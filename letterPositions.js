const letterPositions = function (sentence) {
  const results = {};
  //Iterates over each letter in the sentence
  // As long as the letter is not a space(' ') character, create a Key of the letter in results{} and set the value to 1, or increase it by 1 if it already exists
  for (letter = 0; letter < sentence.length; letter++) {
    if (sentence[letter] !== ' ') {
      if (results[sentence[letter]]) {
        results[sentence[letter]].push(letter);
      } else {
        results[sentence[letter]] = [letter];
      }
    }
  }
  return results;
};
//const result1 = letterPositions('hello my name is Jack');

module.exports = letterPositions;
