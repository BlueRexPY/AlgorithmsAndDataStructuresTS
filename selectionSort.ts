const arr: number[] = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, 99, 24, 23, 6, 2, 35, 6, 3,
  32,
];
let count = 0;

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      ++count;
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
};
console.log("sort: " + selectionSort(arr));// O(n*n)
console.log("count: " + count); // 676

export { };
