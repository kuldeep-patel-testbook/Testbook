let strReplace = (str, oldWord, newWord) => {
    let strSplit = str.split(" ");

    for(let i=0; i < strSplit.length; i++) {

        if(strSplit[i].toLowerCase() === oldWord.toLowerCase()) {
            strSplit[i] = newWord;
        }

    }
    return strSplit.join(" ");
};

let str = "This is a Little bird from a little town";
let oldWord = 'little';
let newWord = 'big';
console.log(strReplace(str,oldWord,newWord));