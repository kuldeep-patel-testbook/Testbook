//Q: A palindrome reads the same forwards and backwards. or A palindrome reads the same forwards and backwards using custom logic.

//custom logic
const isPalindrome = (str) => { // Defines an arrow function in ES6 that takes a String, reverseStr is the function name.

    let reversed = ""; // Initialize an empty string to hold reversed result.
    for(let char of str) { // Loop through each character in the input string
        reversed = char + reversed; // Add current char before the reversed string
    }

    return str === reversed; // Compare original and reversed
};

// Built In Method
/*const isPalindrome = (str) => { //Function takes a string
    // const reversed  = str.split('').reverse().join(''); // Split into array, reverse, then join
    // return str === reversed; //Compare original and reversed
};*/

// Check if String is Pallindrome
console.log(isPalindrome('nayan'));

console.log(isPalindrome('raceacar'));
