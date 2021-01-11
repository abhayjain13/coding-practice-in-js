// Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  let arr = text.toLowerCase().split("");
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in obj)) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]]++;
  }
  let count = 0;
  for (i in obj) {
    if (obj[i] > 1) {
      count++;
    }
  }
  return count;
}
