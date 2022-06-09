/**
 * Returns the middle elements of an array if possible.
 * @param {array} arr
 * @returns {array}
 */
const middle = arr => {
  const result = [];
  const midIndex = arr.length / 2;

  if (arr.length === 1) {
    return arr;
  }
  if (arr.length === 2) {
    return `No middle available`;
  }
  if (arr.length % 2 === 0) {
    result.push(arr[midIndex - 1]);
    result.push(arr[midIndex]);
  }
  if (arr.length % 2 !== 0) {
    const oddMiddle = Math.floor(midIndex);
    result.push(arr[oddMiddle]);
  }
  return result;
};

module.exports = middle;
