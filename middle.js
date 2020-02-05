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

const middle = function(array) {
  //...
  let midElement = Math.floor(array.length/2);
  let tempArray = [];
  //let oddArray = [];

  if(array.length <=2){
    //console.log(tempArray)
  }

  else if(array.length % 2 == 0){
    tempArray.push(array[midElement-1], array[midElement])
    //console.log(tempArray)
  
  }else{
    tempArray.push(array[midElement]);
    //console.log(tempArray)
  }
  return tempArray;
};

assertArrayEqual(middle([1,2,3,4]), [2,3]);
assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]) ,[3]);
assertArrayEqual(middle([1, 2, 3, 4]), [2,3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);




