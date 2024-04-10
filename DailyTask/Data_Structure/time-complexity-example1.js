/* 
1.) The following code sums the digits in a number.
What is its big O time?
Solution:- O(log(n)) [Logarithmic Time Complexity
*/

/*
function sumDigits(n) {
    let sum = 0;
    while(n > 0){
        sum += n % 10;
        n/=10;
    }
    return sum;
}
console.log(sumDigits(100));
console.log(sumDigits(1000));
console.log(sumDigits(100000000000));*/

/* 
2.) What is the Big O Time for the given code?
Solution:- O(n2) [Quadratic Time Complexity]
*/
/* 
function a(n) {
    var count = 0;
    console.log("before", Date.now());
    for(var i=0; i<n*n; i++) {
        count +=1; 
    }
    
    return count;
}
console.log(a(100000));
console.log("before", Date.now());*/


/*
3.) Find the Big O Time Complexity and Big O Space Complexity for the given code?
Solution:-O(n)+O(5*n)=>Take the bigger term => O(5*n) => O(n) { Remove the Constant 5 }
*/

/*function a(n) {
    var count = 0;
    for(var i =0; i < n; i++) {
        count += 1;
    }
    for(var i=0; i<5*n; i++){
        count += 1;
    }
    return count;
}
console.log(a(10000000));*/

/*
4.) What is the Big O Time Complexity of the given code?
Solution:-O(n) linear time complexity.
} */

/*function a(n) {
    var count = 0;
    for(var i=0; i<n; i++) {
        count += 1;
    }
    return count;
}
console.log(a(1500));*/

/*
5.) What is the Big O Time Complexity of the given code?
Solution:- O(∞) Infinite loop. This function will not end.
} */

/*function someFunction(n) {
    while(true) {
        console.log(n);
    }
}

someFunction(100);*/

function someFunction(n){
    for (let i = n; i > 0; i = parseInt(i / 2)) {
        console.log(i);
    }
}

//someFunction(1000); // The correct answer is O(log n)


// function getNthFibo(n) {
//     if(n <= 1) {
//         return n;
//     } else {
//         return getNthFibo(n - 1) + getNthFibo(n - 2);
//     }
// }

// console.log(getNthFibo(20));