// Using Recursion Method

function isPalindrome(str, start = 0, end = str.length -1) {

    console.log(str[start]);
    console.log(str[end]);
    
    // Base case: empty or single-character string is a palindrome
    if(start >= end || str.length <= 1) return true; 
    
    // compare first and last characters.
    if(str[start] === str[end]) {
        return isPalindrome(str, start + 1, end - 1);
    } else {
        return false;
    }
}

const str = "SNSSM";
const result = isPalindrome(str);

if(result === true) {
    console.log(`${str} is a palindrome string.`);
} else {
    console.log(`${str} is not a palindrome string.`);
}