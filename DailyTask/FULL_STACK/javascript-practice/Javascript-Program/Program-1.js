//This code demonstrates Hoisting & Undefined Behavior in JavaScript.

let firstname = fun(); // Calls the fun() function before name is initilized.

const name = "Kuldeep";
//name is declard but remains in the Temporal Dead Zone (TDZ) until this line is executed.

function fun() {
// Function fun() is defined but it uses name before it is assigned a value. 
    return `My ${name} is Patel`; 
}
console.log(firstname); 
// Since name is declared with let, it remains uninitialized until its declaration is reached.
// When fun() tries to use name, it throws a ReferenceError:
// error like  ReferenceError: Cannot access 'name' before initialization