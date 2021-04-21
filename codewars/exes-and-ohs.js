// Link: https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
  let x = 0,
    o = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "o" || str[i] === "O") {
      o++;
    } else if (str[i] === "x" || str[i] === "X") {
      x++;
    }
  }
  return !!(x === o || (x === 0 && o === 0));
}

console.log(XO("ooxx"));
