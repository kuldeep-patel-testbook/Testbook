ABC(); // Hello, Hoisting!  Function declarations are fully hoisted

// The function ABC() is hoisted entirely, so calling it before declaration works fine.
function ABC() {
    console.log("Hello, Hoisting!");
}


//Because BCD is declared using const, and arrow functions are not hoisted like function declarations.
BCD(); // ReferenceError: Cannot access 'BCD' before initialization
const BCD = () => {
    console.log("Hello, New Hoisting!");
};


// Function expressions (const BCD = () => {}) are not hoisted → Call them after declaration.
// Function declarations (function BCD() {}) are hoisted → Can be called before declaration.