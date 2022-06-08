const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  //Immediately returns false if the objects are different lengths
  if (!checkObjLengths(object1, object2)) {
    result = false;
  } else {
    //Iterates over each Value for Object1, if it's type is an Array, check it, and it's sibling value in Object2,
    //using eqArrays function, otherwise compare the two values and flip the result trigger
    //to false if they are different.
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
const checkObjLengths = (obj1, obj2) => {
  let lengthResult = false;
  Object.keys(obj1).length !== Object.keys(obj2).length ? '' : (lengthResult = true);
  return lengthResult;
};

module.exports = eqObjects;
