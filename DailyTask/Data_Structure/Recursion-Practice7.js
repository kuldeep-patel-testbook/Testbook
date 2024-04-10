/* 4. Write a Program to return the count of the occurrences of d as a digit for n number using recursion.
Example:- 
Input: 
n = 86487
d = 8;

Output: 2
*/

function countDigits(n, d) {
    if(n == 0) 
        return 0;

    let digit = Math.floor(n % 10);
    console.log(digit);

    if(digit === d) {
        return 1 + countDigits(n/10, d);
    }

    return countDigits(n/10, d);
}

const n = 1233456793012345;
const d = 3;

const result = countDigits(n, d);
console.log(`The digit ${d} occurs ${result} times in ${n}.`);