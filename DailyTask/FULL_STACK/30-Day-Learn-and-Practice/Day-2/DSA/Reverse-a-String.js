// Reverse an a String Using Recursion (two pointer approch)
const str = "helloworld";
const n = str.length;
function reverseStr(str, start, end) {

    if(start > end) return;

    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;

    reverseStr(str, start+1, end-1);

    return str.join("");
}

const strArr = str.split("");
console.log(reverseStr(strArr, 0, n-1));

