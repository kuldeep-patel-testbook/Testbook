//643. Maximum Average Subarray I
/*
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
*/

/*const maxAverage = (nums, k) => {
    let current = 0;
    
    for(let i=0; i<k; i++) {
        current = current + nums[i];
    }

    let maxSum = current;

    for(let i =1; i < nums.length - k; i++) {
        current = current - nums[i - 1] + nums[i + k - 1];

        if(current > maxSum) {
            maxSum = current;
        }
    }
    return maxSum / k;
};*/

/* Best Approch */
const maxAverage = (arr, k) => {

    let maxSum = -Infinity;
    let start = 0;
    let currSum = 0;

    for(let end =0; end < arr.length; end++) {
        currSum += arr[end];

        if(end - start == k - 1) {
            maxSum = Math.max(currSum, maxSum);
            currSum -= arr[start];
            start++;
        }
    }
    return maxSum / k;

};

const nums = [1,12,-5,-6,50,3], k = 4;
console.log(maxAverage(nums, k));