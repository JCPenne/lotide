const middle = function (arr) {
  const newArr = [];
  const midIndex = arr.length / 2;

  if (arr.length <= 2) {
  }
  if (arr.length % 2 === 0) {
    newArr.push(arr.indexOf(midIndex - 1));
    newArr.push(arr.indexOf(midIndex));
  }
  if (arr.length % 2 !== 0) {
    const oddMiddle = Math.floor(midIndex);
    newArr.push(arr.indexOf(oddMiddle));
  }
  return newArr;
};

module.exports = middle;
