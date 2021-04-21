// Link: https://www.codewars.com/kata/54d512e62a5e54c96200019e

function primeFactors(n) {
  if (n === 0 || n === 1) {
    return "(" + n + ")";
  }
  let obj = {};
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      if (!(i in obj)) {
        obj[i] = 0;
      }

      obj[i] += 1;

      n = n / i;
    }
  }
  let str = "";
  for (let i in obj) {
    if (obj[i] > 1) str += "(" + i + "**" + obj[i] + ")";
    else str += "(" + i + ")";
  }
  return str;
}
