const eqArrays = require('./eqArrays');

//Takes two Objects as Parameters. 
//Checks for equal length first, then checks for strict equality across all elements.
//Order of elements within each Object does not matter.
const eqObjects = (object1, object2) => {
  //Pass both Objects to checkObjLengths to determine equal length. Returns false result and ends the function if they are not.
  if (!checkObjLengths(object1, object2)) {
    result = false;
  } else {
    //Iterates over each Value in Object 1.
    //If Value type is an Array, pass it to eqArrays and check for strict equality across both Objects. Set result to false if they are not equal.
    //Else, compare both values for strict equality. Set result as false if they are not.
    for (values of Object.keys(object1)) {
      if (typeof object1[values] !== 'object') {
        object1[values] !== object2[values] ? (result = false) : (result = true);
      } else {
        result = eqArrays(object1[values], object2[values]);
      }
    }
  }
  return result;
};
//Helper function to check Object lengths
//Takes two Objects as Parameters.
//Checks Object.keys.length for strict equality. Returns true or false.
const checkObjLengths = (obj1, obj2) => {
  //Set a trigger to false
  let lengthResult = false;
  Object.keys(obj1).length !== Object.keys(obj2).length ? '' : (lengthResult = true);
  return lengthResult;
};

module.exports = eqObjects;
