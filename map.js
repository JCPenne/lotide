//Test objects
const words = ['ground', 'control', 'to', 'major', 'tom'];
const results = [70, 50, 100, 85, 12, 42];
const lotr = [
  { name: 'gandalf', species: 'wizard' },
  { name: 'Frodo', species: 'hobbit' },
  { name: 'Aragon', species: 'human' },
];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
//Test result to push to the original assertArraysEqual function
const results1 = map(words, word => word[0]);
const results2 = map(results, result => result > 70);
const results3 = map(lotr, x => x.species);

//Outdated test results against the original assertArraysEqual function

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results2, [false, false, true, true, false, false]);
// assertArraysEqual(results3, ['wizard', 'hobbit', 'human']);
