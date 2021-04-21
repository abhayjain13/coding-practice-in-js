// Link: https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n) {
  let i,
    s = 0;
  for (i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }
  return s.toFixed(2);
}
