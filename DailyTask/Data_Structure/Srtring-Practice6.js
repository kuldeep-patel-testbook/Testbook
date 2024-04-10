/*
Using Javascript
Write a Program to truncate a string to a certain number of words.
*/

function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(' ');
}

console.log(truncate("This quick brown fox jumps over the lazy dog", 3));