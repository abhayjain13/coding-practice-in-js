// Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
  let arr = s.split(" ");
  let len = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < len) len = arr[i].length;
  }
  return len;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
