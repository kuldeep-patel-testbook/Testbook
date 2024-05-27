// 5. Write a Program to reverse the string using a recursive method.

function reverse(str, len) {
    if(len == str.length) {
        return;
    }
    reverse(str, len + 1);
    console.log(str[len]);
}
let a = "RecurString";
reverse(a, 0);


//6.Write a Program to find the power of a number using a recursive method where base and exponent is entered by the user.

const exponent = function(a, n) {
    
    if(n===0) {
        return 1;
    } else {
        return a * exponent(a, n-1);
    }
}
console.log("Write a Program to find the power of a number using a recursive method where base and exponent is entered by the user.");
console.log("exponent", exponent(5, 2));