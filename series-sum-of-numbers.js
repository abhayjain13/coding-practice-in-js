// Link: https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b) {
  if (a == b) {
    return a;
  }

  let count = 0;
  if (a > b) {
    for (b; b <= a; b++) {
      count += b;
    }
  } else {
    for (a; a <= b; a++) {
      count += a;
    }
  }
  return count;
}

console.log(getSum(505, 4));
