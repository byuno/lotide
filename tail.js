const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed:  ${actual} ==== ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed:  ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  let tempArray = [];
  let tailArray = [];
  if (array === undefined) {
    return undefined;
  } else if (array.length === 1 && array === []) {
    return [];
  } else {
    for (let i = 0; i < array.length; i++) {
      tempArray[i] = array[i];
    }
  }
  tailArray = tempArray.slice(1);
  return tailArray;
};

console.log(tail([1, 2, 3]));
console.log(tail());
console.log(tail([]));
console.log(tail([1]));

//Test Case: Check the original array
 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!s