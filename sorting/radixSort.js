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

function getMaxLength(arr) {
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      const itemLen = arr[i].toString().length;
      if (maxLen < itemLen) {
        maxLen = itemLen;
      }
    }
  }
  return maxLen;
}

function getFlatArr(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      flatArr = [...flatArr, ...arr[i]];
    }
  }
  return flatArr;
}

function RadixSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const maxLen = getMaxLength(arr);
  for (let i = 0; i < maxLen; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const ele = arr[j].toString();
      const pos = ele.length - i - 1;
      const num = ele[pos];
      if (num !== undefined) {
        buckets[num].push(arr[j]);
      } else {
        buckets[0].push(arr[j]);
      }
    }
    arr = getFlatArr(buckets);
  }
  return arr;
}

const unSortArr = [19, 79, 612, 809, 12, 3, 1];
console.log("UnSorted Array:", unSortArr);
console.log("Sorted Array:", RadixSort(unSortArr));
