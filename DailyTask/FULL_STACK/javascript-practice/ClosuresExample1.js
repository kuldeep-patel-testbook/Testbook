
function outer() {
    let name = "Kuldeep";

    function inner() {
        console.log(`Hello,  ${name}`); // Inner Function Outer variables ko access kar sakta hai
    }

    return inner;
}

const greet = outer();

greet(); // Hello Kuldeep!