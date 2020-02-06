const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed:  ${actual} ==== ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed:  ${actual} !== ${expected}`);
  }

};

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

  console.log('Output of object1[keys]', Array.isArray(object1[keys]));
  console.log('Output of object2[keys]', Array.isArray(object2[keys]));

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


//console.log(eqObjects(ab, ba)); // true

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
//console.log(eqObjects(ab, ba)); // true


const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false*/

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);
