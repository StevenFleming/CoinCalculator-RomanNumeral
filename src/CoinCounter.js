const testAmount = 4.99

export const changeCalculator = amount => {
  if (isNaN(amount)) {
    return amount
  } else if (amount % 25 == 0) {
    return `you get ${Math.floor(amount / 25)} quarters`
  } else if ((amount % 25) % 10 == 0) {
    return `you get ${Math.floor(amount / 25)} quarters and ${Math.floor(
      (amount % 25) / 10
    )} Dimes`
  } else if (((amount % 25) % 10) % 5 == 0) {
    return `you get ${Math.floor(amount / 25)} quarters, ${Math.floor(
      (amount % 25) / 10
    )} Dimes, ${Math.floor(((amount % 25) % 10) / 5)} Nickels`
  } else if (((amount % 25) % 10) % 5 != 0) {
    return `you get ${Math.floor(amount / 25)} quarters, ${Math.floor(
      (amount % 25) / 10
    )} Dimes, ${Math.floor(((amount % 25) % 10) / 5)} Nickels,${Math.floor(
      ((amount % 25) % 10) % 5
    )} Pennies`
  }5
}

export const changeCalculator2 = amount => {
  if (isNaN(amount)) {
    return amount
  } else if (amount % 25 != 0) {
    return amount
  } else {
    return changeCalculator2(Math.floor(amount / 25))
  }
}
changeCalculator(testAmount)

const penny = 1
const nickel = 5
const dime = 10
const quarter = 25
const coins = [quarter, dime, nickel, penny]

// const index = 0

const ChangeCalc = (amount, index) => {
  console.log(coins[index] + " cents");
  console.log(Math.floor(amount / coins[index])) 
  if (amount % coins[index] == 0) {
    return; // breakpoint
  } 
  if (index > coins.length -1){
       return; // breakpoint 
  }
  ChangeCalc(amount % coins[index], index + 1) // recursive
}


const recurseReverse2 = (string, index) => {
  console.log("iteration #" + index);
  console.log(string);
  if (string === "") {
    console.log("(breakpoint)")
    return "";
  } else {
    console.log("> one level deeper")
    return recurseReverse2(string.substring(1), index + 1) + `(${index})` + string[0];
  }
}