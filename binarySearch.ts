const arr: number[] = [];
let count: number = 0;
//generate arr
for (let i = 1; i < 101; i++) {
  arr.push(i);
}

//algorithm
const binarySearch = (arr, item) => {
  let founded = false;
  let start = 0;
  let middle;
  let end = arr.length;
  let position = -1;

  while (!founded && start <= end) {
    count++;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      position = middle;
      return position;
    }
    item < arr[middle] ? (end = --middle) : (start = ++middle);
  }
  return position;
};

function recursiveBinarySearch(arr, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  ++count
  if (item === arr[middle]) {
    return middle
  }
  if (item < arr[middle]) {
    return recursiveBinarySearch(arr, item, 0, middle - 1)
  } else {
    return recursiveBinarySearch(arr, item, middle + 1, end)
  }
}

console.log("index: " + binarySearch(arr, 4)); //3
console.log("count: " + count); // 6
count = 0;

console.log("index: " + recursiveBinarySearch(arr, 0, 0, arr.length)); 
console.log("count: " + count); 
