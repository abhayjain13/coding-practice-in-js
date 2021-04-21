// Link: https://www.codewars.com/kata/552c028c030765286c00007d/

function iqTest(numbers) {
  const arr = numbers.split(" ");
  const len = arr.length;
  let countEven = 0,
    countOdd = 0,
    posEven = 0,
    posOdd = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] % 2 === 0) {
      countEven++;
      posEven = i + 1;
    } else {
      countOdd++;
      posOdd = i + 1;
    }

    if (countEven > 1 && countOdd === 1) {
      return posOdd;
    } else if (countOdd > 1 && countEven === 1) {
      return posEven;
    }
  }
}
