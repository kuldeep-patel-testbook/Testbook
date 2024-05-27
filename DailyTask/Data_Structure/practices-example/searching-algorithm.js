let arr = [3, 1, 4, 5, 2, 6, 9, 7, 6];
let target = 6;

function linearSearch(arr, target) {

    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;

}

const result = linearSearch(arr, target);

if (result == -1) {
    console.log(`Element ${target} not found in the array.`);
} else {
    console.log(`Element ${target} found at index ${result}.`);
}