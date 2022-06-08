//Takes an Array and a Callback Function as Parameters.
//Returns a result Array that contains each Element of the Parameter Array, stopping once the Callback Function returns true.
const takeUntil = (array, callback) => {
  //Create an empty result Array
  let result = [];
  //Iterates over each Element within the Parameter Array.
  array.forEach((element, index) => {
    //If passing the element into the Callback Function returns true, slice the Parameter Array at that element, starting from element[0].
    if (callback(element)) {
      //Reassign the sliced Array as the result Array and return it.
      result = array.slice(0, index);
    }
  });
  return result;
};

module.exports = takeUntil;
