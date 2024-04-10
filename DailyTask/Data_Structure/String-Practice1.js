/*
Using Javascript
Write a Program to check whether a string is blank or not.
*/

const blankString = (str) => {
    const lengthCheck = str.length;
    if (lengthCheck == '' || lengthCheck === 0) {
        return true;
    } else {
        return false;
    }
};

const str = "Hello One";
console.log(blankString(str));