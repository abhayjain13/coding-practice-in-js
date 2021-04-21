// Link: https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2) {
  let a1Len = array1 && array1.length;
  let a2Len = array2 && array2.length;
  if (a1Len != a2Len) return false;
  let obj = {};
  for (let i = 0; i < a1Len; i++) {
    let arr2 = Math.sqrt(array2[i]);
    if (!(array1[i] in obj)) {
      obj[array1[i]] = [0, 0];
    }
    if (!(arr2 in obj)) {
      obj[arr2] = [0, 0];
    }
    obj[array1[i]][0]++;
    obj[arr2][1]++;
  }
  for (i in obj) {
    if (obj[i][0] !== obj[i][1]) {
      return false;
    }
  }
  return true;
}
