// Link: https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let intial = i;

    for (let j = i + 1; j < numbers.length; j++) {
      let final = j;
      let sum = numbers[i] + numbers[j];

      if (sum === target) {
        return [intial, final];
      }
    }
  }
}
