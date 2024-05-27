// 2. Write a Program to print the product of even numbers from 1 to N where N is the number inputted by the user

function evenProduct(n) {
    let even = 1;
    for(i=1; i<=n; i++) {
        console.log(i);
        even *= i; // multiplication one by one next element like 1*2*3*4....
    }

    console.log("Even Numbers Product", even);
}

evenProduct(8);