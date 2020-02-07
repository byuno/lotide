const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed:  ${actual} ==== ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed:  ${actual} !== ${expected}`);
  }

};


const findKey = function(object, callback){

  let inputObjectKeys = Object.keys(object);

  //console.log(inputObjectKeys);

  for(let keys of inputObjectKeys){

    if(callback(object[keys]) === true){
    //console.log('using callback in loop: ', object[keys]);
    return keys;
    //return keys;
    }
    
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(findKey())