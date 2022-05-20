const assertArraysEqual = function (arr1, arr2) {
  eqArrays(arr1, arr2)
    ? console.log(`✅ Assertion passed: ${arr1} === ${arr2}`)
    : console.log(`❗️ Assertion failed: ${arr1} !== ${arr2}`);
};

const eqArrays = function (arg1, arg2) {
  let result = false;
  let checkLength = false;
  let falseFlag = true;

  arg1.length !== arg2.length ? (checkLength = false) : (checkLength = true);

  if (checkLength === true) {
    for (i in arg1) {
      arg1[i] !== arg2[i] ? (falseFlag = false) : (result = true);
    }
    falseFlag === false ? (result = false) : '';
  }
  return result;
};

const middle = function (arr) {
  const newArr = [];
  const midIndex = (arr.length / 2);

  if (arr.length <= 2) {
  }
  if (arr.length % 2 === 0) {
    newArr.push(arr.indexOf(midIndex-1))
    newArr.push(arr.indexOf(midIndex))
  }
  if (arr.length % 2 !== 0) {
    const oddMiddle = Math.floor(midIndex)
    newArr.push(arr.indexOf(oddMiddle))
  }
  return newArr
};

console.log(middle([0]));
console.log(middle([0, 1, 2, 3,4,5]));
console.log(middle([0,1,2,3,4,5,6,7,8]));
