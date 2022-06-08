

//Takes two Arrays as Parameters.
//Returns a True or False result after checking for strict equality.
const eqArrays = (arg1, arg2) => {
  //Set a trigger to false
  let result = false;
  //Pass both Arrays into checkArrayLengths function to determine equal length. Returns false result and ends the function if they are not.
  if (!checkArrayLengths(arg1, arg2)) {
    return false;
    //Iterates over corresponding elements within both Arrays, (i). If any of them are not equal set the trigger to false.
  } else {
    for (i in arg1) {
      arg1[i] !== arg2[i] ? (result = false) : (result = true);
    }
  }
  return result;
};

//Helper function to determine if array lengths are equal.
//Takes two Arrays as Parameters,
//Checks Array.length for strict equality. Returns true or false.
const checkArrayLengths = (arg1, arg2) => {
  //Set a trigger to false
  let lengthResult = false;
  arg1.length !== arg2.length ? '' : (lengthResult = true);
  return lengthResult;
};

module.exports = eqArrays;
