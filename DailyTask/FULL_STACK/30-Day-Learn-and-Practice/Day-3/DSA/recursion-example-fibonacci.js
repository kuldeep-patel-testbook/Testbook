// Naive Approch Fibonacci series

function fibonacci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log("fibonacci - Naive Approh =>",fibonacci(6));


//Optimized Approach – Using Memoization

function fibonacciMemo(n, memo={}) {
    
    if(n === 0) return 0;
    if(n === 1) return 1;

    if(memo[n]) return memo[n];

    memo[n] = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo);

    return memo[n];
}

console.log("fibonacciMemo - Optimized arrroch - its is use Dynamic Programming =>", fibonacciMemo(6));