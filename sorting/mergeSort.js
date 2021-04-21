/* 
Algorith:
  MergeSort(arr[], l,  r)
    If r > l
      1. Find the middle point to divide the array into two halves:  
        middle m = l+ (r-l)/2
      2. Call mergeSort for first half:   
        Call mergeSort(arr, l, m)
      3. Call mergeSort for second half:
        Call mergeSort(arr, m+1, r)
      4. Merge the two halves sorted in step 2 and 3:
        Call merge(arr, l, m, r)
*/

function merge(leftArr, rightArr) {
  const resultArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      resultArr.push(leftArr.shift());
    } else {
      resultArr.push(rightArr.shift());
    }
  }
  return [...resultArr, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const unSortArr = [9, 7, 6, 0, 2, 3, 1];
console.log("UnSorted Array:", unSortArr);
console.log("Sorted Array:", mergeSort(unSortArr));
