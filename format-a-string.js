// Link: https://www.codewars.com/kata/53368a47e38700bd8300030d
function list(names) {
  const len = names.length;

  if (len === 0) {
    return "";
  }

  let str = names[0].name;

  if (len === 1) {
    return str;
  }

  for (let i = 1; i < len - 1; i++) {
    str = str + ", " + names[i].name;
  }

  str = str + " & " + names[len - 1].name;

  return str;
}
