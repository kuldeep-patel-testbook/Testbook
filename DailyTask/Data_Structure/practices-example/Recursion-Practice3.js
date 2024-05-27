// 3. Write a Program to count the number of digits in a number N using a recursive method.

function countDigit(n) {
    let count = 0;
    while(n != 0) {
        n = Math.floor(n / 10);
        console.log(n);
        count++;
    }
    return count;
}

console.log("Number of Digits", countDigit(573698536585321456));

//4.Write a Program to print the sum of digits of a number N using a recursive method.

function sumOfDigit(n){
    if(n === 0){
        return 0;
    } else {
        return (n % 10 + sumOfDigit(parseInt(n/10)));
    }
}

console.log(sumOfDigit(123456));