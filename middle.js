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


module.exports = middle;






