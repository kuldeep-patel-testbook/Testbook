// sayHi() is a function that returns the result of an immediately invoked Function Expression (IIFE)
function sayHi() {
    return (() => 0)()
    // (() => 0)() is an arrow function IIFE.
    // It executes immediately and returns 0.
}

console.log(sayHi()); // output 0