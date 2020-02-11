// const middle = require('../middle')
// const assertArraysEqual = require('../assertArraysEqual')

// assertArraysEqual(middle([1,2,3,4]), [2,3]);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]) ,[3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);


const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle test cases", () => {
  it("returns [2,3]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  })

  it("returns []", () => {
    assert.deepEqual(middle([1]), []);
  })

  it("returns []", () => {
    assert.deepEqual(middle([1, 2]), []);
  })

  it("returns [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })

  it("returns [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]) ,[3]);
  })

  it("returns [2,3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  })

  it("returns [3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  })

});

