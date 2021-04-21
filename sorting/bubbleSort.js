/* 
Algorith:
  BubbleSort(arr[])
    Algorithm: To sort an array of size n in ascending order: 
    1. Starting with the first element, compare the current element with the next element of the array.
    2. If the current element is greater than the next element of the array, swap them.
    3. If the current element is less than the next element, just move to the next element.
    4. Start again from Step 1.
*/

function BubbleSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let len = arr.length;
  while (len) {
    for (let i = 1; i < len; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
    len--;
  }
  return arr;
}

const unSortArr = [9, 7, 6, 0, 2, 3, 1];
console.log("UnSorted Array:", unSortArr);
console.log("Sorted Array:", BubbleSort(unSortArr));
