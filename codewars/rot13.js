// Link: https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  let arr = message.split("");
  const codeA = "A".charCodeAt(0);
  const codeZ = "Z".charCodeAt(0);
  const codea = "a".charCodeAt(0);
  const codez = "z".charCodeAt(0);
  for (let i = 0; i < arr.length; i++) {
    let codeValue = arr[i].charCodeAt();
    if (codeValue >= codeA && codeValue <= codeZ) {
      arr[i] = String.fromCharCode(((codeValue - codeA + 13) % 26) + codeA);
    } else if (codeValue >= codea && codeValue <= codez) {
      arr[i] = String.fromCharCode(((codeValue - codea + 13) % 26) + codea);
    }
  }
  return arr.join("");
}
