/* 
Algorith:
  SelectionSort(arr[])
    The algorithm maintains two subarrays in a given array.
    
    1) The subarray which is already sorted.
    2) Remaining subarray which is unsorted.

    In every iteration of selection sort, the minimum element 
    (considering ascending order) from the unsorted subarray is 
    picked and moved to the sorted subarray.
*/

function selectionSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

const unSortArr = [9, 7, 6, 0, 2, 3, 1];
console.log("UnSorted Array:", unSortArr);
console.log("Sorted Array:", selectionSort(unSortArr));
