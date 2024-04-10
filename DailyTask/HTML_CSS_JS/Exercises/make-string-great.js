/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = [];
    for (let char of s) { // iterates through each character in the string s.
        // checks if it forms a pair that should be removed with the last character in the stack, and either removes the last character from the stack.
        // or adds the current character to the stack. 
        if (stack.length && Math.abs(stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join(''); // joins the characters in the stack to form the resulting string ad then return.
};

let s1 = "leEeetcode"; // Output: "leetcode"
//s1 = "abBAcC"; // Output: ""
//s1 = "s"; // Output: "s"

console.log("Final Result=>", makeGood(s1)); 