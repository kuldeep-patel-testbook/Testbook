let fullname = {
    firstname: "Kuldeep",
    lastname: "Patel",

}

let fullname2 = {
    firstname: "Kush",
    lastname: "Patel",
}

let printFullName = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state + ", " + country);
}

// Bind Method Works
let printMyName = printFullName.bind(fullname, "Patan", "Gujarat", "India");
console.log(printMyName);
printMyName();
console.log("=========================================");
let printMyName2 = printFullName.bind(fullname2, "Ahmedabad", "Gujarat", "India");
printMyName2();


// Non-curried function
function multiply(a, b, c) {
    return a * b * c;
}

// Curried version using arrow functions
const curriedMultiply = (a) => (b) => (c) => a * b * c;

// Using the curried function
const multiplyByTwo = curriedMultiply(2); // Returns a function that multiplies by 2
const multiplyByTwoAndThree = multiplyByTwo(3); // Returns a function that multiplies by 3

// Calling the curried function with all arguments
console.log("Calling the curried function with all arguments with result come a * b * c =>", multiplyByTwoAndThree(4)); // Output: 2 * 3 * 4 = 24


const sum = function(x) {
    return (y) => {
        return (z) => {
            return x + y + z;
        }
    }
}

console.log("Calling the curried function with all arguments with result come a + b + c =>", sum(5)(10)(15));

//Object Literal Notation:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello: function() {
        console.log("Hello!");
    }
  };
  