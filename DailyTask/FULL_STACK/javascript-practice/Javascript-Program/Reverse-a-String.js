//Q: Reverse a string without using built-in reverse() method.

const reverseStr = (str) => { // Defines an arrow function in ES6 that takes a String, reverseStr is the function name.
    //(str) is the parameter — the input string you want to reverse.
    
    let reversed = ""; // Initialize an empty string to hold reversed result.

    for(let i = str.length - 1; i>=0; i--) {  // for loop, going from end of the string to the beginning:
        // str.length - 1 gives the last character’s index.
        // The loop continues as long as i is ≥ 0
        // i-- means you're decrementing one step back each time.
        reversed += str[i]; // Add current char before the reversed string
        // str[i] fetches character at index i.
        // += appends that character to reversed.
    }
    return reversed; // Once the loop ends, Return the reversed result
};

const str = "Hello";  // "olleH"

console.log(reverseStr(str));

