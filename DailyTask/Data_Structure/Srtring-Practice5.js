/*
Using Javascript
Write a Program to reverse words in a given string.
*/

/*const reverseWords = (str) => {
    const length = str.length;
    if (length === 0) {
        return "String can not be empty";
    }
    return str.split("").reverse().join('');
};

console.log(reverseWords("Hello 123456"));
*/

function test(text) {
    if (text.length === 0) { 
        return 'String should not be empty!' 
    } 
    if (typeof text !== 'string') { 
        return 'It must be a string.' 
    } 
    text = " " + text; 
    var reverse_word = ""; 
    var word = ""; 
    
    for(let i = text.length -1; i>=0; i--) {
        if(text[i] === ' ') {
            reverse_word = word + " " + reverse_word;
            word = "";
        } else {
            word += text[i];
        }
    } 
    return reverse_word;
}
console.log(test("Hello 123456"));
