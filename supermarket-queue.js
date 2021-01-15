// Link: https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
  let queue = [];
  for (let i = 0; i < n; i++) {
    queue.push(0);
  }
  for (let i = 0; i < customers.length; i++) {
    queue[0] += customers[i];
    queue.sort(function (a, b) {
      return a - b;
    });
  }
  return queue[queue.length - 1];
}
