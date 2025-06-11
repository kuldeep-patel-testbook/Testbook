
// Find the sum of N naturals numbers using recurssion

function Sum(n) {
    if(n === 0 || n === 1) return 1;

    return n + Sum(n-1);
}

console.log("Sum of n naturals numbers=>", Sum(5));


// Calculate a of b using recursion

function PowerOfValue(b, e) {

  

    if(e === 0) return 1;

    if(e < 0) {
        return 1 / PowerOfValue(b, e-1);
    }
    return b * PowerOfValue(b, e-1);
}

console.log("Power of Value =>", PowerOfValue(3,5));
