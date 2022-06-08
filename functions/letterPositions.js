//Takes a String as a Parameter.
//Iterates over each character within the string, omits spaces, and returns an Object showing the index/es of each character.
const letterPositions = string => {
  const results = {};
  //Iterates over each character in the string
  for (character = 0; character < string.length; character++) {
    //checks that the character is not a space.
    if (string[character] !== ' ') {
      //If the results Object already contains the related character Key, push the index of the character to the Key's Value.
      if (results[string[character]]) {
        results[string[character]].push(character);
        //If the results Object does not contain the related character Key, created a new Key and set it's Value to the index as an Array.
      } else {
        results[string[character]] = [character];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
