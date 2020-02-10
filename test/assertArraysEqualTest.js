//const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(assertArraysEqual([1,2,3], [1,2,3]), true);
assertArraysEqual(assertArraysEqual([1,2,3], [1,2,4]), false);
