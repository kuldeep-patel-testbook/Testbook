const arr1 = [1, 3, 8, 7];
const arr2 = [2, 4, 10, 9];

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var findMedianSortedArrays = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);
    const length = mergedArray.length;

    if (length % 2 === 0) {
        const mid1 = mergedArray[length / 2 - 1];
        const mid2 = mergedArray[length / 2];
        return (mid1 + mid2) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
};

/*const arr1 = [1,3, 5];
const arr2 = [2,5, 6];

const findMedianSortedArrays = function(arr1, arr2) {

    let mergedArray = arr1.concat(arr2);
    mergedArray.sort((a,b)=> a - b);

    const length = mergedArray.length;

    if(length % 2 === 0) {
        const mid1 = mergedArray[length / 2 - 1];
        const mid2 = mergedArray[length / 2];
        return (mid1 + mid2) /2; 
    } else {
        return mergedArray[Math.floor(length/2)];
    }
};*/

console.log("findMediaSortedArrays", findMedianSortedArrays(arr1, arr2));