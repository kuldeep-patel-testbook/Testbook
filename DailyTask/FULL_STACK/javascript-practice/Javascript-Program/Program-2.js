/*
    The given function is an example of currying, which is a technique where a function takes multiple arguments one at a time,
    instead of all at once.
*/
// console.log("output with normal function", mul(2)(4)(6))
function mul(a) { // This function takes one argument 'a' and returns another function.
    return function(b) { // Instead of calculating the result immediately, mul(a) returns a function that expects the second argument 'b'.
        return function(c) { // The second function now returns another function that expects the third argument c.
            return a * b * c; // Once all arguments are recieved (a, b, c), the function calculates  a * b * c and returns the result.
        }
    }
}

console.log("output with normal function", mul(2)(4)(6))

// OR Shorter Way Using Arrow Functions

const multiply = (a) => (b) => (c) =>  a * b * c;
console.log("output with arrow function", multiply(2)(4)(6))

/*
f.example
    mul(2) -> returns function(b) { returns function(c) { return 2 * b * c; } }
    mul(2)(4) -> returns function(c) { return 2 * 4 * c; }
    mul(2)(4)(6) -> returns 2 * 4 * 6 = 48
*/
