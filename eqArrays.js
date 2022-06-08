//If Array lengths are equal, iterate over each element, if any element does not match across both arrays, turn the trigger to false.

const eqArrays = function (arg1, arg2) {
  let result = false;
  if (!checkArrayLengths(arg1, arg2)) {
    return false;
  } else {
    for (i in arg1) {
      arg1[i] !== arg2[i] ? (result = false) : (result = true);
    }
  }
  return result;
};
//Helper function to determine if the array lengths are equal
const checkArrayLengths = (arg1, arg2) => {
  let lengthResult = false;
  arg1.length !== arg2.length ? '' : (lengthResult = true);
  return lengthResult;
};

module.exports = eqArrays;
