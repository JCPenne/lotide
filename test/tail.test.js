const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail([0, 1, 2]), 1, 2);
