/*
Using Javascript
Write a Program to check if a given string is in the Flat case or not.
Flatcase: As the name implies, flatcase refers to the use of lowercase letters, with no spaces between words.
*/

const flatCase = (text) => {
    const pattern = /^[a-z]*$/;
    return pattern.test(text);
}

console.log(flatCase("JavaSCriptIShiGherLanguage")); // false
console.log(flatCase("javascriptishigherlanguage")); // true
