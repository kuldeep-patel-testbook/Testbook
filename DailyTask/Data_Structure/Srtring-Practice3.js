/*
Using Javascript
Write a Program to test whether the character at the provided (character) index isupper case.
*/

function isUpperCaseAt(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
}
//console.log(isUpperCaseAt('JavaScript', 0)); // true 
// console.log(isUpperCaseAt('JavaScript', 1)); // false2
console.log(isUpperCaseAt('JavaScript', 4)); // true
