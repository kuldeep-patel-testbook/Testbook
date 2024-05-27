// Count no of words in sentence
let words = " Hello my name is Kuldeep Patel ";
let splitWords = words.trim().split(' ');
console.log("Using Split", splitWords.length);

let spaces = 0;
for (i=0; i<words.length; i++) {
    if(words[i] == " ") {
        spaces++;
    }
}
let wordsCount = spaces + 1;
console.log("Using Iterate loop", wordsCount);


