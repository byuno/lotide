const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed:  ${actual} ==== ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed:  ${actual} !== ${expected}`);
  }

};

const countLetters = function (inputString) {
  const results = {};
  let joinedString = inputString.split(' ').join('');

  for (const letter of joinedString) {

    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("level"));
console.log(countLetters("bobby yutaka uno"));