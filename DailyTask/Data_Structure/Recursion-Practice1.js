// 1. Write a Program to print the first n fibonacci numbers.
// Example:- 0 1 1 2 3 . . .

const getNthFunc = (n) => {
    if(n == 0 ||  n == 1) return n;
    return getNthFunc(n-1) + getNthFunc(n-2);
}

console.log("getNthFunc Sum=>", getNthFunc(6));

function printFibonacciNumbers(n) {
    let f1 = 0, f2 = 1, i;
    if( n < 1)
        return n;
    //console.log("f1", f1 +  " ");
    for(i=2; i<=n; i++) {
        console.log("f2", f2 + " ");
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
    console.log("Sum Of Each Numbers", f2);
}   
printFibonacciNumbers(8);