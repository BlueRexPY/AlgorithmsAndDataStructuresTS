const arr: number[] = [1, 4, 6, 8, 38, 0, 78, 3];
let count: number = 0;

const linerSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    ++count;
    if (item === arr[i]) return i;
  }
  return null;
};


console.log("index: " + linerSearch(arr, 4)); //1
console.log("count: " + count); //2
