// Link: https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
  const arr = words.split(" ");
  let str = [""];

  if (arr.length === 1) {
    return arr[0];
  }

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].match(/(\d+)/);
    const index = +word[0];
    str[index] = arr[i];
  }
  return str.join(" ").trim();
}

console.log(order("is2 Thi1s T4est 3a"));
