/*
 Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

// function isPallindrome(x) {
//     if(x < 0) {
//         console.log("If condition exist");
//         return false;
//     }
//     const convertString = String(x);
//     console.log(convertString);
//     const reverseString = convertString.split('').reverse().join('');
//     console.log("else condition exist");
//     return convertString === reverseString;
// }

const isPallindrome = (x) => {
    if(x < 0) {
        console.log("If Condition Exist");
        return false;
    }
    console.log("Else Condition Exist")
    const convertString = String(x);
    const reverseString = convertString.split('').reverse().join('');
    return convertString === reverseString;
}

const x = 101101;
console.log(isPallindrome(x));