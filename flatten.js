const eqArrays = function(array1, array2){
  if(array1.length !== array2.length){
    return false;
  }
  else{
    for(let i = 0; i < array1.length; i++){
      if(array1[i] !== array2[i]){
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

const flatten = function(inputArray){
  let updatedArray = [];
  
  for(let i = 0; i < inputArray.length; i++){
    if(Array.isArray(inputArray[i])){
      for(let j = 0; j < inputArray[i].length; j++){
        updatedArray.push(inputArray[i][j]);
      }

    }
    else{
      updatedArray.push(inputArray[i]);
    }
  }
  
  return updatedArray;
};

assertArrayEqual(flatten([1,2, [3, 4]]),[1,2,3,4]);
assertArrayEqual(flatten([1,2, [3, 4], [2], 3]),[1,2,3,4,2,3]);