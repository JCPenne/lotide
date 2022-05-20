/* Passes the eqArrays function to see if it returns true or false. If eqArrays returns true, console.log the assertion passed message
Otherwise pass the assertion failed message */
const assertArraysEqual = function (arr1, arr2) {
  eqArrays(arr1, arr2)
    ? console.log(`✅ Assertion passed: ${arr1} === ${arr2}`)
    : console.log(`❗️ Assertion failed: ${arr1} !== ${arr2}`);
};
/* Checks if 2 arrays are the same length. If they are, iterate over each element and compare it to it's sibling.
If all siblings are equal return a true value. Otherwise return a false value */
const eqArrays = function (arg1, arg2) {
  let result = false;
  let checkLength = false;
  let falseFlag = true;

  // Checks for equal array lengths, otherwise immediately flags the function return value as false
  arg1.length !== arg2.length ? (checkLength = false) : (checkLength = true);

  // Iterates over 2 equal length arrays and compares each element in them both.
  if (checkLength === true) {
    for (i in arg1) {
      arg1[i] !== arg2[i] ? (falseFlag = false) : (result = true);
    }
    // Changes result to false if a non-matched pair has been found
    falseFlag === false ? (result = false) : '';
  }
  return result;
};



const without = function (source, itemsToRemove) {
  return source.filter((keepNumber) => !itemsToRemove.includes(keepNumber));
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without([1, 2, 3, 4, 5], [1, 3, 5, 4]), [2]);
