

//Takes an Array and a callback Function as Parameters. 
//Returns a results Array of all Elements in the Parameter Array after passing them through the callback Function
const map = (array, callback) => {
  //Create an empty result Array
  const result = [];
  //Iterate over each element in the Array Parameter and pass them through the callback Function. Push the result to the result Array.
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};
module.exports = map;
