//Set an empty result Array.
const resultArr = [];
//Takes an Array with nested Arrays within it as a Parameter.
//Recursively flattens the Array and returns a new Array with the flattened results.
const flatten = arr => {
  //Iterates over each element in the Array.
  arr.forEach(element => {
    //If the data type of the element is an Array, run the flatten Function on the element.
    if (Array.isArray(element)) {
      flatten(element);
      //If the data type is not an Array, push the element into resultArr.
    } else {
      resultArr.push(element);
    }
  });
  return resultArr;
};

module.exports = flatten;
