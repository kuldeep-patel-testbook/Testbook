
//3. Find Factorial (Recursively)
const factorialNum = (num) => {
    if(num === 0) return 1; // It is a Base Case factorialNum(0) its return 1

    return num * factorialNum(num - 1);
    // 5 * factorialNum(4) -> 4 * factorialNum(3) -> 3 * factorialNum(2) -> 2 * factorialNum(1) -> 1 * factorialNum(0)
}

console.log(factorialNum(5)); // 5 * 4 * 3 * 2 * 1 = 120