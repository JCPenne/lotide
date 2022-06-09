/**
 * Returns an object showing the index/es of each character within a string, not including spaces.
 * @param {string} string
 * @returns {object}
 */
const letterPositions = string => {
  const results = {};
  for (character = 0; character < string.length; character++) {
    if (string[character] !== ' ') {
      if (results[string[character]]) {
        results[string[character]].push(character);
      } else {
        results[string[character]] = [character];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
