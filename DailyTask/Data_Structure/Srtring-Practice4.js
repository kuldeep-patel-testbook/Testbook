/*
Using Javascript
Write a Program to convert a string in abbreviated form.
*/

const abbrevName = function(str1) {
    const split_names = str1.trim().split(" ");
    if(split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names;
}

console.log(abbrevName("Kuldeep Patel"));