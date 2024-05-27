//Write a Program to find two array elements in an array that add up to a number

const inputArray = [1,9,0,4,7,5];
const num = 4;

function findSum(arr, sum) {
    const arrlength = arr.length;
    for(let i=0; i < arrlength; i++ ) {
        for(let j = i+1; j < arrlength; j++) {
            if(arr[i] + arr[j] == sum) {
                return [arr[i], arr[j]];
            }
        }
    }   
    return -1;
}

/*const findSum = function(arr, sum) {
    const arrLen = arr.length;
    for(let i=0; i<arrLen; i++) {
        for(let j=i+1; j<arrLen; j++) {
            if(arr[i]+arr[j] == sum){
                return [arr[i], arr[j]];
            }
        }
    }
    return -1;
};*/

console.log(findSum(inputArray, num));
