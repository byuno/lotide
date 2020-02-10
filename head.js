const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array === undefined) {
    return undefined; //console.log(undefined)
  } else if (array.length === 1) {
    return array[0]; //console.log(array[0]);
  } else if (array === []) {
    return undefined; //console.log(undefined);
  } else {
    return array[0]; //console.log(array[0]);
  }
};

module.exports = head;



