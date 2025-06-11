

// Reverse an Array Using Simple While Loop

const arr = [10, 25, 3, 80, 0, 52];
const n = arr.length;

function reverseArray(arr, start, end) {

    while(start < end) {

        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    return arr;

}

console.log("Using While loop => ", reverseArray(arr, 0, n-1));

// ################ Reverse an Array using Recursion (two Pointer approch) ################
const arrRev = [33, 20, 50, 80, 10, 1, 55];
const len = arrRev.length;

function reverseArrUsingRecursion(arrRev, start, end) {
    if(start > end) return;

    const temp = arrRev[start];
    arrRev[start] = arrRev[end];
    arrRev[end] = temp;

    reverseArrUsingRecursion(arrRev, start+1, end-1);
    return arrRev;
}


console.log("Reverse an Array using Recursion (two Pointer approch) =>", reverseArrUsingRecursion(arrRev, 0, len-1));

