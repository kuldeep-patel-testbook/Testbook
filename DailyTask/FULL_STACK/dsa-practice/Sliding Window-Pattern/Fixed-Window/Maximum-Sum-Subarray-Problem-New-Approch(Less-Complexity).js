//     (Fixed Size Sliding Window)

// const maxSumSubArray = (arr, k) => {

//     let current = 0;
//     // Step 1: Pehle window ka sum nikaalo
//     for(let i = 0; i < k; i++) {
//         current = current + arr[i];
//     }
//     console.log("current=>", current);
//     // Step 2: Usko maxSum banado
//     let maxSum = current;
//     console.log("maxSum=>", maxSum);
 
//     // Step 3: Har window ke liye ek element hatao (left se), ek add karo (right se)
//     for(let i=1; i <= arr.length - k; i++) {
//         //console.log(arr[i]);
//         current = current - arr[i - 1] + arr[i + k - 1];

//         if(current > maxSum) {
//             maxSum = current;
//             console.log("IF MaX Sum", maxSum);
//         }
//     }
//     return maxSum;
// };

/* Best Approch */
const maxSumSubArray = (arr, k) => {

    let maxSum = -Infinity;
    let start = 0;
    let currSum = 0;

    for(let end =0; end < arr.length; end++) {
        currSum += arr[end];

        if(end - start == k -1) {
            maxSum = Math.max(currSum, maxSum);
            currSum -= arr[start];
            start++;
        }
    }
    return maxSum;

};

//const arr = [3,8,2,5,7,6,12], k = 4;

const arr = [2,1,5,1,3,2], k = 3

console.log(maxSumSubArray(arr, k));


/*
    What It Does:
    Finds the maximum sum of a subarray of fixed length k

    Uses Sliding Window to avoid recomputing the sum from scratch

    This is the optimized O(n) solution, better than brute force (O(n*k))

    Time Complexity	O(n) — only one pass through array after initial window
    Space Complexity	O(1) — no extra space used


*/