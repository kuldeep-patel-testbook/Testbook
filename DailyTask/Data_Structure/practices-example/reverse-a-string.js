// Reverse a String
let s = "Hello";
/*let reverse = s.split('').reverse().join('');
console.log(reverse);*/

let rev = "";
let n = s.length;
for(let i=n-1; i>=0; i--) {
    rev = rev + s[i];
}
console.log(rev);