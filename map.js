const eqArrays = function (arg1,arg2) {
  let result = false
  let checkLength = false
  let falseFlag = true

  arg1.length !== arg2.length
    ? checkLength = false
    : checkLength = true
    
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
const assertArraysEqual = function(arr1,arr2) {
  eqArrays(arr1,arr2)
    ? console.log(`✅ Assertion passed: ${arr1} === ${arr2}`)
    : console.log(`❗️ Assertion failed: ${arr1} !== ${arr2}`);
}



const words = ['ground', 'control', 'to', 'major', 'tom'];
const results = [70,50,100,85,12,42]
// the callback parameter on line 3 will equal "word => word[0]" due to the call on line 13
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};

const results1 = map(words, word => word[0]);

assertArraysEqual(results1,['g','c','t','m','t'])
