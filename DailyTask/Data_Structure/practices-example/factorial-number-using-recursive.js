// Using Recursion Method
// Factorial Number
// function factorialRecursion(n) {
//     if(n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
//     return n * factorialRecursion(n-1); // Recursive case: n! = n * (n-1)!
// }
//let n = 8;
//console.log(`The factorial of ${n} is: ${factorialRecursion(n)}`);

let factorialRecursion = function(n) {
    if(n===0) return 1; // Base Case : factorial of 0 or 1 is 1
    return n * factorialRecursion(n-1); // Recursive case n! = n * (n-1)
}

let n = 8;
console.log("Factorial Number Using Recursion=>", factorialRecursion(n));

// Factorial Using Normal method 
function factorialNum(n) {

    if(n < 0) return "Undefined for negative numbers";
    let fact = 1, i;
    /*for(i=n; i>=1; i--) {
        fact *= i;
    }*/
    for(i=1; i<=n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("factorialNum", factorialNum(5));

// Sum of Natural Number (ex: 5+4+3+2+1 = 15)
function sumRecursion(n) {
    if(n == 1) return 1; // Base Case
    return n + sumRecursion(n-1);
}
console.log(sumRecursion(10));