const arr: number[] = [
    0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, 99, 24, 23, 6, 2, 35, 6, 3, 32,
];
let count: number = 0;

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
            ++count
        }
    }
    return arr
}

console.log("sort: " + bubbleSort(arr)); // O(n*n)
console.log("count: " + count); //676
