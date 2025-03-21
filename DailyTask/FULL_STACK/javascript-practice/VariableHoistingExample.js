
console.log("Value is:", a); // undefined (Because `var a` is hoisted but not initialized.)
var a = 5; // var a is hoisted to the top but remains undefined until assigned;
// var a = 10 // Re-declaration allowed and Re-assignment allowed
console.log(a); // After initialization Value Show


// console.log("Value is:", b); // ReferenceError: Cannot access 'b' before initialization (Because `let b` is hoisted but in Temporal Dead Zone.)
// let b = 10;
// // b = 20;  // Re-declaration not allowed but Re-assignment allowed
// console.log("Value is:", b);


console.log("Value is:", PI); // ReferenceError: Cannot access 'PI' before initialization (Because `const  PI` is hoisted but in Temporal Dead Zone.)
const PI = 3.125 //Block scope, can't be reassigned
// PI = 4.125 // Re-declaration and Re-assignment not allowed (TypeError: Assignment to constant variable.)
