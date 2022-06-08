const findKeyByValue = function (obj, value) {
  for (keys in obj) {
    if (obj[keys] === value) {
      return keys;
    }
  }
};
module.exports = findKeyByValue;
