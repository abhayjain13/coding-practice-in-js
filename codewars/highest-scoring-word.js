// Link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
  let arr = x.toLowerCase().split(" ");
  let max = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    let val = 0;
    arr[i].split("").map((num) => {
      return (val += +num.charCodeAt(0) - 96);
    });
    if (val > max) {
      index = i;
      max = val;
    }
  }
  return arr[index];
}
