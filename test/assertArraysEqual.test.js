const _ = require('../index.js');

_.assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
_.assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

_.assertArraysEqual(['1', '2', '3'], ['1', '2', '3']); // => true
_.assertArraysEqual(['1', '2', '3'], ['1', '2', 3]); // => false
