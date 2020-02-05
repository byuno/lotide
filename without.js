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

const without = function(source, itemsToRemove){
  let updatedArray = Array.from(source);

  for(let i = 0; i < updatedArray.length; i++){
    for(let j = 0; j < itemsToRemove.length; j++){
      if(updatedArray[i] === itemsToRemove[j]){
        updatedArray.splice(i,1);
      }  
  }
  //updatedArray = itemsToRemove.filter(word => word !== source[0]);
  
}

  //updatedArray = itemsToRemove.filter(word => word !== source[0]);

  //console.log(updatedArray);
return updatedArray;
};

assertArrayEqual(without([1, 2, 3], [1]),[2, 3]);
//console.log(without([1,2,3], [1,3]));
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);
