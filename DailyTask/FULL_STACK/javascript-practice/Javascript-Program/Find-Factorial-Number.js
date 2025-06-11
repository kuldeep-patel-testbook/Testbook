//Q: Write a function to return factorial using recursion.

    const factorial = (num) => { // Function that takes a Number
    if(num === 0 || num === 1) return 1; // Base Case 0! or 1! is 1
    return num * factorial(num - 1); // Recursive call : num * (num -1)
};

console.log(factorial(5)) // 120  (5 * 4* 3 * 2 * 1 = 120)

console.log(factorial(7)) // 5040 ( 7 * 6 * 5 * 4 * 3 * 2 * 1) 