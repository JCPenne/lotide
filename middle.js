//README explains the logic for different Array lengths
const middle = function (arr) {
  const newArr = [];
  const midIndex = arr.length / 2;

  if (arr.length === 1) {
    return arr;
  }
  if (arr.length === 2) {
    return `No middle available`;
  }
  if (arr.length % 2 === 0) {
    newArr.push(arr[midIndex - 1]);
    newArr.push(arr[midIndex]);
  }
  if (arr.length % 2 !== 0) {
    const oddMiddle = Math.floor(midIndex);
    newArr.push(arr[oddMiddle]);
  }
  return newArr;
};

module.exports = middle;
