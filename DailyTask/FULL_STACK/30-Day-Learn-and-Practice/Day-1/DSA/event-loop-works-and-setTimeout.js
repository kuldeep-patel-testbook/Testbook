
// Demonstrate event loop with setTimeout, Promise, and async/await.

// The event loop is an essential part of JavaScript’s concurrency model, handling asynchronous code execution.

console.log("Start");

setTimeout(() => {
    console.log("setTimeout execute");
}, 0);

console.log("End");

// // Synchronous code runs first, because Start, End are printed immediately.
// setTimeout with 0ms delay it is pushed to the event queue and executed after the main script. 
// so Synchronous code runs first and then printed settimeout value.