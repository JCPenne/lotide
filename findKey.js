const findKey = function (obj, callback) {
  resultArr = [];
  for (key in obj) {
    if (callback(obj[key])) {
      resultArr.push(key);
    }
  }
  return resultArr;
};

module.exports = findKey;
