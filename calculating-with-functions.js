// Link: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function zero(num) {
  return num ? num(0) : 0;
}
function one(num) {
  return num ? num(1) : 1;
}
function two(num) {
  return num ? num(2) : 2;
}
function three(num) {
  return num ? num(3) : 3;
}
function four(num) {
  return num ? num(4) : 4;
}
function five(num) {
  return num ? num(5) : 5;
}
function six(num) {
  return num ? num(6) : 6;
}
function seven(num) {
  return num ? num(7) : 7;
}
function eight(num) {
  return num ? num(8) : 8;
}
function nine(num) {
  return num ? num(9) : 9;
}

function plus(x) {
  return function (y) {
    return x + y;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return x * y;
  };
}
function dividedBy(x) {
  return function (y) {
    return x === 0 ? "not divisible" : Math.floor(y / x);
  };
}
