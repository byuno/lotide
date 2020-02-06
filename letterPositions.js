const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }
    return true;
  }
};

const assertArrayEqual = function (array1, array2) {
  //console.log(array1)
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

const letterPositions = function (sentence) {
  const results = {};
    
    for(let i = 0; i < sentence.length; i++){
      let letter = sentence[i];

      if (results[letter]) {
        results[letter].push(i)
      } else {
        results[letter] = [i];
      }
    }
  return results;

};
//console.log(letterPositions("level"));

assertArrayEqual(letterPositions("hello").e, [1]);


