/*Given an array arr and a chunk size size, return a chunked array. 
A chunked array contains the original elements in arr, but consists of subarrays each of length size. 
The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.
Example 1:
Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.

Example 2:
Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

Example 3:
Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation: Size is greater than arr.length thus all elements are in the first subarray.

Example 4:
Input: arr = [], size = 1
Output: []
Explanation: There are no elements to be chunked so an empty array is returned.
*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
// Using ES6
const chunk = (arr, size) => {
    const arrLength = arr.length;
    const chunked = [];
    let subChunk = [];
    
    for(let i=0; i<arrLength; i++) {
        subChunk.push(arr[i]);

        if(subChunk.length === size || i === arrLength - 1) {
            chunked.push([...subChunk]); // Use spread operator to create a copy of the chunk
            subChunk = [];
        }
    }
    return chunked;
};

const arr = [1, 8, 9, 3, 5, 6];
const size = 2;
console.log(chunk(arr, size));