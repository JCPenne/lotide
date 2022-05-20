const assertArraysEqual = function(arr1,arr2) {
  eqArrays(arr1,arr2)
    ? console.log(`✅ Assertion passed: ${arr1} === ${arr2}`)
    : console.log(`❗️ Assertion failed: ${arr1} !== ${arr2}`);
}

const eqArrays = function (arg1,arg2) {
  let result = false
  let checkLength = false
  let falseFlag = true

  arg1.length !== arg2.length
    ? checkLength = false
    : checkLength = true
    
    // loop through each element of both arrays. If the elements do not match, turn the falseFlag to false.
    // If falseFlag equals false turn result to false
  if (checkLength === true) {
    for (i in arg1) {
      arg1[i] !== arg2[i]
      ? falseFlag = false
      : result = true
    }
    falseFlag === false
    ? result = false
    : ''
  }
  return result;
};
assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", '2', '3']) // => false