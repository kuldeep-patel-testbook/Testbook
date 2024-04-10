/*
Using Javascript
Write a Program to split a string and convert it into an array of words.
*/
const strToArray  = (str) => {
    return str.trim().split(' ');
};

const str = "Hello this is a split words"; 
console.log(strToArray(str));

const s= "Testbook";
console.log(s.charAt(3));