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
  return numberComparison(numberArray);
  // return numberArray.reduce(function (currentVal, element) {
  //   return element + currentVal;
  // }, 0);
};

const numberComparison = (numberArray) => {
  let sum = 0;
  for (let i = 0; i < numberArray.length - 1; i++) {
    if (numberArray[i] < numberArray[i + 1]) {
      sum -= numberArray[i];
    } else {
      sum += numberArray[i];
    }
  }
  return (sum += numberArray[numberArray.length - 1]);
};

console.log("IV: " + convertRomanToInt("iv"));
console.log("III: " + convertRomanToInt("iii"));
console.log("IX: " + convertRomanToInt("ix"));
console.log("LXVI: " + convertRomanToInt("lxvi"));
console.log("XCIX: " + convertRomanToInt("xcix"));

console.log("Array Total + numberComparison");

// const summedArray = numArray.reduce(function (currentValue, element) {
//   return element + currentValue;
// }, 0);
