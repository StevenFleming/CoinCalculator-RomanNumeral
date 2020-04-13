const RomanNumeralValues = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

const convertRomanToInt = (roman) => {
  const numberArray = roman.split("").map((e) => (e = RomanNumeralValues[e]));
  return numberArray;
  // return numberArray.reduce(function (currentVal, element) {
  //   return element + currentVal;
  // }, 0);
};

console.log("IV: " + convertRomanToInt("iv"));
console.log("III: " + convertRomanToInt("iii"));
console.log("IX: " + convertRomanToInt("ix"));

// const summedArray = numArray.reduce(function (currentValue, element) {
//   return element + currentValue;
// }, 0);
