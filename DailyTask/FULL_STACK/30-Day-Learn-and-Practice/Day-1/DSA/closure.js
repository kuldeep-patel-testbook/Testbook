// Closure Example

function outerFunction() {
    let scope = 10;

    function innerFunction() {
        console.log("Inner Function", scope); // Inner Function outerFunction ke variables ko access kar sakta hai
    }
    return innerFunction;
}

const closure = outerFunction();
closure(); // output is : 10