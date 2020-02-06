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

const eqObjects = function (object1, object2) {
  let inputObjectKeys1 = Object.keys(object1);
  let inputObjectKeys2 = Object.keys(object2);

  if (inputObjectKeys1.length !== inputObjectKeys2.length) {
    return false;
  }

  let numMatchingValues = 0;

  for (const keys of inputObjectKeys1) {

  //console.log('Output of object1[keys]', Array.isArray(object1[keys]));
  //console.log('Output of object2[keys]', Array.isArray(object2[keys]));

  if (Array.isArray(object1[keys]) === true && Array.isArray(object2[keys]) === true) {
    return eqArrays(object1[keys], object2[keys]);
  } else {
    (object1[keys] === object2[keys])
      numMatchingValues += 1;
  }
}

if (numMatchingValues === inputObjectKeys1.length) {
  return true;
}

return false;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect;
  //console.log(`Example label: ${inspect(actual)}`);

  if(eqObjects(object1,object2)){
    console.log(`🟢🟢🟢 Assertion Passed:  ${inspect(object1)} ==== ${inspect(object2)}`);

  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(object1)} !=== ${inspect(object2)}`);

  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertObjectsEqual(eqObjects(ab,ba), true);