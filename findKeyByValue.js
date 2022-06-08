//Takes an Object and a Value as Parameters.
//Returns any key that contains the Value Parameter.
const findKeyByValue = (obj, value) => {
  //Iterate over the Keys in the obj Parameter. If the Key's Value is strictly equal to the Value Parameter, return it.
  for (keys in obj) {
    if (obj[keys] === value) {
      return keys;
    }
  }
};
module.exports = findKeyByValue;
