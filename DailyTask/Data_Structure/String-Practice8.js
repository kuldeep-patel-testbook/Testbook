/*
Using Javascript
Write a Program to find a word within a string.
*/

const searchWord = function (text, word) {

    let x = 0;
    let y = 0;

    for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times";
}

const text = "The Quick brown fox jumps over the jumps lazy dog the brown jumps";
const word = "jumps";
console.log(searchWord(text, word));