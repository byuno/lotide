const head = require('../head');
const assertEqual = require('../assertEqual');


assertEqual(head(), undefined);
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
assertEqual(head([5, 4, 3, 2]), 5);