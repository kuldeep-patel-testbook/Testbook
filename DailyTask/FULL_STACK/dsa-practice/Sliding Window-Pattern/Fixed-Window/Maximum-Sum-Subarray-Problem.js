
// maximum sum of a subarray of fixed size w
const maxSumSubArray = (arr, w) => {

    let maxx = -Infinity;
    for(let i=0; i<=arr.length-w; i++) {
        let current = 0;
        for(let j = i; j <=i+w-1; j++) {
            
            current = current + arr[j];
            maxx = Math.max(current, maxx);
        }
    }
    return maxx;
}

const arr = [1,12,-5,-6,50,3];
//const arr = [3,8,2,5,7,6,12];
const w = 4;

console.log(maxSumSubArray(arr, w));


/*
Pattern Name: Fixed Size Sliding Window
    Finding the maximum sum of a subarray of fixed size w inside an array.
    Using a nested loop, which leads to O(n * w) time complexity. means O(n)2 
    
*/

/*
Prepare These Related Questions:
Maximum Sum Subarray of Size K

Maximum Average Subarray

Minimum Size Subarray Sum (Variable Size)

First Negative Number in Window

Max in All Windows (Using Deque)
*/