//Implement variable scoping (var, let, const).

// Var Example
console.log("==== Var Scoping Example ====");
    console.log("Value is:", a);    // It is a hoisting concept, // undefined (Because `var a` is hoisted but not initialized.)
    var a = 10;                     // var a is hoisted to the top but remains undefined until assigned;
    console.log("Value is:", a);    // After initialization then Value Show

    a = 20;                         // Re-declaration allowed and Re-assignment allowed
    console.log("Value is:", a);    // After Value Show New one


// Let Example
console.log("==== Let Scoping Example ====");
//console.log("Value is:", b);  // It is a hoisting concept, // ReferenceError: Cannot access 'b' before initialization
//(Because `let b` is hoisted but in Temporal Dead Zone.)

    let b = 30;
    console.log("Value is:", b);
    b = 40;                         // Re-declaration not allowed but Re-assignment allowed
    console.log("Value is:", b);


// Const Example
console.log("==== Const Scoping Example ====");
//console.log("Value is:", c); // It is a hoisting concept, // Cannot access 'c' before initialization
//(Because `const c` is hoisted but in Temporal Dead Zone.)
const c = 3.125; //Block scope, can't be reassigned.
console.log("Value is:", c);
c = 4.125 // Re-declaration and Re-assignment not allowed (TypeError: Assignment to constant variable.)
//