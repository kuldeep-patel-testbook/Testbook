209. // Minimum Size Subarray Sum

/* Best Approch */

const minSumSubArray = (target, arr) => {

    let minSum = Infinity;
    let start = 0;
    let currSum = 0;

    for(let end =0; end < arr.length; end++) {
        currSum += arr[end];

        while(currSum >= target) {
            minSum = Math.min(minSum, end - start + 1);
            currSum -= arr[start];
            start++;
        }
    }
    return minSum === Infinity ? 0 : minSum;

};

const nums = [2,3,1,2,4,3], target = 7;

console.log(minSumSubArray(target, nums));