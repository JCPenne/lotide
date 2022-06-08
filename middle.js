//Takes an Array as a Parameter.
//Returns a result Array showing the middle character/s if possible of the Parameter Array.
const middle = arr => {
  //Create an empty result Array.
  const result = [];
  //Create a Number Variable of the Parameter's Array length divided by 2.
  const midIndex = arr.length / 2;

  //If the Parameter Array's length is 1, return the Parameter Array.
  if (arr.length === 1) {
    return arr;
  }
  //If the Parameter Array's length is 2, return a string saying no middle character is Available.
  if (arr.length === 2) {
    return `No middle available`;
  }
  //If the Parameter Array's length is an Even Number, push the two middle elements into the result Array.
  if (arr.length % 2 === 0) {
    result.push(arr[midIndex - 1]);
    result.push(arr[midIndex]);
  }
  //If the Parameter Array's length is an Odd Number, push the middle element into the result Array.
  if (arr.length % 2 !== 0) {
    //Round the midIndex variable down to create an Integer representing the middle element of the Parameter Array.
    const oddMiddle = Math.floor(midIndex);
    result.push(arr[oddMiddle]);
  }
  return result;
};

module.exports = middle;
