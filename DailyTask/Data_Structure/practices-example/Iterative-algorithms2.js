// Write a Program to find the sum of n numbers using a while loop.
// OR Here's a simple JavaScript program that uses a while loop to find the sum of the first n natural numbers:
const num = 10;
// function numSum(num) {
//     let sum = 0;
//     let i=1;
//     while(i <= num) {
//         sum +=i;
//         i++;
//     }
//     return sum;
// }

const numSum = (num) => {
    let sum = 0, i = 1;
    while(i <= num) {
        sum += i;
        i++;
    }
    return sum;   
};

console.log(`The sum of the first ${num} natural numbers is: ${numSum(num)}`);