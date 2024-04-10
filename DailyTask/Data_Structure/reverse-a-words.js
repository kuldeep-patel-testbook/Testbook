// Reverse all words in sentence

/*function reverse(text) {
    //text += " " + text;
    let n = text.length;
    let rev = "";
    for(let i=n-1; i>=0; i--) {
        rev = rev + text[i];
    }
    return rev;
}
let text = "You are a God of this World";
let word = "";
let n = text.length;
let ans = "";
for(let i=0; i<n; i++) {
    if(text[i] === ' '){
        // reverse the word and add to ans
        ans += reverse(word) + " ";
        word = "";
    } else {
        word +=text[i];
    }
}
ans +=reverse(word); // for last word
console.log(ans);*/


const reverse = function(text) {
    text = " " + text;
    let n = text.length;
    let rev = "";
    let word = "";
    
    for(let i = n-1; i>=0; i--) {

        if(text[i] === " ") {
            rev = word + " " + rev;
            word = "";
        } else {
            word +=text[i];
        }
        
    }
    return rev;
}

let text = "Shiva is a God of God in this World";
console.log(reverse(text));