// Write a Program to input a string and check if it’s palindrome in nature or not using recursion
// Example: ParttraP is a palindrome word while Apple is not a palindromeword.

function isPalindromeRecursive(word) {
    return isPalindromeHelper(word, 0, word.length-1);
}

function isPalindromeHelper(word, beginPos, endPos) {
    if(beginPos >= endPos) {
        return true;
    }
    if(word.charAt(beginPos) !=word.charAt(endPos)) {
        return false;
    } else {
        return isPalindromeHelper(word, beginPos + 1, endPos -1);
    }
}

console.log("isPalindromeRecursive=>", isPalindromeRecursive('ParttraP'));

/*
2.Write a Program to convert Decimal Number (BASE 10) TO Binary Number(BASE 2).
Example: 
Input : (2)10
Output: (010)2 
*/

function base10ToString(n) {
    let binarryString = "";
    function base10ToStringHelper(n) {
        if(n < 2 ) {
            binarryString +=n;
            return;
        } else {
            base10ToStringHelper(Math.floor(n/2));
            base10ToStringHelper(n%2);
        }
    }
    base10ToStringHelper(n);
    return binarryString;
}

console.log("base10ToString=>", base10ToString(15));