// Link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
  const len = strarr.length;
  if (len === 0 || k < 1 || k > len) {
    return "";
  }
  let result = "";
  let longestLength = 0;
  let longest = "";
  for (let i = 0; i < len; i++) {
    result = "";
    for (j = i; j < i + k; j++) {
      if (strarr[j] !== undefined) result += strarr[j];
    }
    if (result.length > longestLength) {
      longest = result;
      longestLength = result.length;
    }
  }
  return longest;
}
