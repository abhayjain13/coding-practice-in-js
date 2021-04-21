/* 
Algorith:
  InsertionSort(arr[])
    Algorithm: To sort an array of size n in ascending order: 
    1: Iterate from arr[1] to arr[n] over the array. 
    2: Compare the current element (key) to its predecessor. 
    3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
*/

function insertionSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const unSortArr = [9, 7, 6, 0, 2, 3, 1];
console.log("UnSorted Array:", unSortArr);
console.log("Sorted Array:", insertionSort(unSortArr));
