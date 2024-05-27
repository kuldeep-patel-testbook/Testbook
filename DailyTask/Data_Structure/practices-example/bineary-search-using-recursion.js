//Using Iterative Way
/*function iterativeBinearySearch(arr, target) {
    let s = 0;
    let e = arr.length - 1;

    while (s <= e) {
        let mid = Math.floor((s + e) / 2);
        if (target === arr[mid]) {
            return mid; // target found at index mid
        } else if (target < arr[mid]) {
            e = mid - 1; // target is smaller, so go to left.
        } else {
            s= mid + 1 //target is greater, so go to right.
        }
    }
    return -1;
}

const arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
const target = 8;
const result = iterativeBinearySearch(arr, target);
if(result !== -1) {
    console.log(`Target ${target} found at index ${result}`);
} else {
    console.log(`Target ${target} not found in the array`);
}*/

// Using Recursive Way Bineary Search algorithm
/*function recursiveBinarySearch(sortedArray, targetElement, start, end) {
    if(start > end ) return -1;

    let mid = Math.floor((start + end) / 2);

    if(targetElement === sortedArray[mid]) {
        return mid; // target found at index mid
    } else if(targetElement < sortedArray[mid]) {
        return recursiveBinarySearch(sortedArray, targetElement, start, mid - 1); // target is smaller, so go to left.
    } else {
        return recursiveBinarySearch(sortedArray, targetElement,  mid + 1, end); //target is greater, so go to right.
    }
}*/


function recursiveBinarySearch(arr, target, start, end) {
    if(start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if(target === arr[mid]) {
        return mid; // target found at index mid
    } else if(target < arr[mid]) {
        return recursiveBinarySearch(arr, target, start, mid - 1); // target is smaller, so go to left.
    } else {
        return recursiveBinarySearch(arr, target, mid + 1, end); // target is greater, so go to right.
    }
}

const sortedArray = [1,3,4,5,6,8,9,10];
const targetElement = 9;
const n = sortedArray.length;

const result = recursiveBinarySearch(sortedArray, targetElement,0, n-1);

if(result !== -1) {
    console.log(`Target ${targetElement} found at index ${result}`);
} else {
    console.log(`Target ${targetElement} not found in the array`);
}