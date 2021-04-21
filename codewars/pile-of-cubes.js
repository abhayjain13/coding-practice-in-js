// Link: https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  let n = 0;
  while (1) {
    if (m > 0) {
      let curr = Math.pow(n + 1, 3);
      m -= curr;
    } else if (m === 0) {
      return n;
    } else if (m < 0) {
      return -1;
    }
    n++;
  }
}

console.log(findNb(1071225));
