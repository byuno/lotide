// const head = require('../head');
// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'undefined' for head()", () => {
    assert.strictEqual(head(), undefined); 
  });

  it("returns '1' for [1]", () => {
    assert.strictEqual(head([1]),1); 
  })

  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined); 
  })

  it("returns '5' for [5, 4, 3, 2]", () => {
    assert.strictEqual(head([5, 4, 3, 2]), 5); 
  })

});

// assertEqual(head(), undefined);
// assertEqual(head([1]), 1);
// assertEqual(head([]), undefined);
// assertEqual(head([5, 4, 3, 2]), 5);