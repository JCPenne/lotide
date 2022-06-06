const eqArrays = function (arg1, arg2) {
  let result = false;
  let checkLength = false;

  arg1.length !== arg2.length ? (checkLength = false) : (checkLength = true);

  if (checkLength === true) {
    for (i in arg1) {
      arg1[i] !== arg2[i] ? (result = false) : (result = true);
    }
  }
  return result;
};

module.exports = eqArrays;
