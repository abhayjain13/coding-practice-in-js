// Link: https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num) {
  num = num + "";
  let arr = num.split("");
  let digit = "";

  for (let i = 0; i < arr.length; i++) {
    digit += Math.pow(arr[i], 2);
  }

  return +digit;
}

console.log(squareDigits(3212));
