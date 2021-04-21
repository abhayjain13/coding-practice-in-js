/* 
Algorith:
  RadixSort(arr[])
    Algorithm: To sort an array of size n in ascending order: 
    1. Find the largest element in the array, i.e. max.
    Let X be the number of digits in max. 
    X is calculated because we have to go through all the significant 
    places of all elements.
    2. Use any stable sorting technique to sort the digits at each significant place. We have used counting sort for this.
    3. Sort the elements based on the unit place digits (X=0).
*/

// https://levelup.gitconnected.com/heapsort-for-javascript-newbies-598d25477d55

function heapify(arr, len, i) {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;
  if (left < len && arr[left] > arr[largest]) {
    console.log("left");
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    console.log("right");
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, len, largest);
  }
  return arr;
}

function HeapSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let len = arr.length;
  let i = Math.floor(len / 2 - 1);
  let k = len - 1;
  while (i >= 0) {
    heapify(arr, len, i);
    i--;
  }
  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]];
    heapify(arr, k, 0);
    k--;
  }
  return arr;
}

const unSortArr = [19, 79, 612, 809, 12, 3, 1];
console.log("UnSorted Array:", unSortArr);
console.log("Sorted Array:", HeapSort(unSortArr));
