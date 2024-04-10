/*
Using Javascript
Write a Program to remove the first occurrence of a given 'searchstring' from a string.
*/

function removeFirstOccurence(str, searchStr) {
    const index = str.indexOf(searchStr);
    if(index === -1) {
        return str;
    }

    return str.slice(0, index)+str.slice(index + searchStr.length); 
}

console.log(removeFirstOccurence('This quick brown fox jumps over the lazy dog', 'the'));