const findKeyByValue = function (obj, value) {
  for (keys in obj) {
    if (obj[keys] === value) {
      return keys;
    }
  }
};

// let testObj = {
//   name: 'Jack',
//   age: '32',
//   gender: 'male',
// };

// const bestTVShowsByGenre = {
//   sci_fi: 'The Expanse',
//   comedy: 'Brooklyn Nine-Nine',
//   drama: 'The Wire',
// };

module.exports = findKeyByValue;
