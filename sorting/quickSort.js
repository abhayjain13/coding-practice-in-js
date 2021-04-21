/* 
Algorith:
  QuickSort(arr[])
    Always pick first element as pivot.
    Always pick last element as pivot (implemented below)
    Pick a random element as pivot.
    Pick median as pivot.
*/

function partition(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }
  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  const index = partition(arr, start, end);
  // Recursively apply the logic to the left and right subarrays
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);

  return arr;
}

const unSortArr = [9, 7, 6, 0, 2, 3, 1];
console.log("UnSorted Array:", unSortArr);
console.log("Sorted Array:", quickSort(unSortArr, 0, unSortArr.length - 1));
