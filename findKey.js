//Takes an Object and a Callback Function as Parameters.
//Returns an Array of Object Keys that return true when called within the Callback Function.
const findKey = (obj, callback) => {
  //Set an empty Result Array
  resultArr = [];
  //Iterate over each Key in the obj Parameter. If calling the Callback Function on the Key returns true, push the Key into the result Array.
  for (key in obj) {
    if (callback(obj[key])) {
      resultArr.push(key);
    }
  }
  return resultArr;
};

module.exports = findKey;
