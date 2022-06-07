const resultArr = [];
const flatten = function (arr) {
  //Recursive function to reduce nested arrays down to their base layer.
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatten(element);
    } else {
      resultArr.push(element);
    }
  });
  return resultArr;
};

module.exports = flatten;
