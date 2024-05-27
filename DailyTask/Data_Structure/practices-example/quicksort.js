/*
Here's a simple implementation of the Quick Sort algorithm in JavaScript:
*/

function quickSort(arr) {
    let nlength = arr.length;

    if(nlength <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    const pivot = arr[Math.floor(nlength / 2)];  //Choose a pivot element
    console.log(pivot);
    const left = [];
    const right = [];

    // Partition the array into two sub-arrays:

    for(let i=0; i < nlength; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else if(arr[i] > pivot) {
            right.push(arr[i]);
        }
    }
    // Recursively sort the left and right sub-arrays
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [5,9,8,7,3,2,4,10,1,6];
console.log(quickSort(arr));