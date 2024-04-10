/*
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
If there are no elements in the array, it should return -1.
You may assume the array is the output of JSON.parse.

Example 1:
Input: nums = [null, {}, 3, 5, 10]
Output: 3
Explanation: Calling nums.last() should return the last element: 10.

Example 2:
Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.
*/

Array.prototype.last = function() {
    //console.log("length", this.length);
    //console.log(this[this.length -1]);
    return this.length ? this[this.length -1] : -1;
}

const arr = [null, {}, 3, 5, 10];
console.log(arr.last()); // 10