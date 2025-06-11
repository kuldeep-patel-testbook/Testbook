//Q: Reverse a string without using built-in reverse() method.  --- iterative approach (with a simple for loop)
const str = "helloworld";

function reverseStr(str) {
    let reversed = "";

    for(let i = str.length -1; i>=0; i--) {

        reversed +=str[i];
    }
    return reversed;
}

console.log(reverseStr(str));

