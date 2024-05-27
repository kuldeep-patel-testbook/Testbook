let str = "ABCDEFGHIJK";

let stack = [];
let reverse = [];

for(let i =0; i<str.length; i++) {
    stack.push(str[i]);
}

while (stack.length > 0) {
    reverse += stack.pop();
}

// for(let i=str.length -1; i>=0; i--) {
//     reverse += str[i];
// }

//reverse = str.split('').reverse().join('');
console.log(reverse);