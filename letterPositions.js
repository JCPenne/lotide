const letterPositions = function (sentence) {
  const results = {};

  for (letter = 0; letter < sentence.length; letter++) {
    if (sentence[letter] !== ' ') {
      if (results[sentence[letter]]) {
        results[sentence[letter]].push(letter);
      } else {
        results[sentence[letter]] = [letter];
      }
    }
  }
  // console.log(results);
  return results;
};
const result1 = letterPositions('hello my name is Jack');

module.exports = letterPositions;
// assertArraysEqual(result1['l'], [2, 3]);
