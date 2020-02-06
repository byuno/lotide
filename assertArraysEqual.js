const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🔴🔴🔴 Assertion Failed:  ${array1} !== ${array2}`);
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🔴🔴🔴 Assertion Failed:  ${array1} !== ${array2}`);
      return false
    }
  }

  console.log(`🟢🟢🟢 Assertion Passed:  ${array1} ==== ${array2}`);

  return true;
};

const findKeyByValue = function(object, value){

  
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);