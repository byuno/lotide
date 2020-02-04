const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed:  ${actual} ==== ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed:  ${actual} !== ${expected}`);
  }

};

const head = function(array) {
  if (array === undefined) {
    return undefined; //console.log(undefined)
  } else if (array.length === 1) {
    return array[0]; //console.log(array[0]);
  } else if (array === []) {
    return undefined; //console.log(undefined);
  } else {
    return array[0]; //console.log(array[0]);
  }
};


assertEqual(head(), undefined);
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
assertEqual(head([5, 4, 3, 2]), 5);
