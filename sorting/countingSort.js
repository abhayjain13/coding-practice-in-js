/* 
Algorith:
  CountingSort(arr[])
    Algorithm: To sort an array of size n in ascending order: 
    1. Starting with the first element, compare the current element with the next element of the array.
    2. If the current element is greater than the next element of the array, swap them.
    3. If the current element is less than the next element, just move to the next element.
    4. Start again from Step 1.
*/

function CountingSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const arrEltCount = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in arrEltCount) {
      arrEltCount[arr[i]]++;
    } else {
      arrEltCount[arr[i]] = +1;
    }
  }
  for (let i = 1; i < arrEltCount.length; i++) {
    if (typeof arrEltCount[i] !== "number") {
      arrEltCount[i] = 0;
    }
    if (typeof arrEltCount[i - 1] !== "number") {
      arrEltCount[i - 1] = 0;
    }
    arrEltCount[i] = arrEltCount[i] + arrEltCount[i - 1];
  }
  const sortArr = [];
  for (let i = 0; i < arr.length; i++) {
    sortArr[arrEltCount[arr[i]]] = arr[i];
    arrEltCount[arr[i]]--;
  }

  var filteredArr = sortArr.filter(function (el) {
    return el != null;
  });
  return filteredArr;
}

const unSortArr = [2, 9, 7, 7, 6, 0, 2, 3, 1];
console.log("UnSorted Array:", unSortArr);
console.log("Sorted Array:", CountingSort(unSortArr));
