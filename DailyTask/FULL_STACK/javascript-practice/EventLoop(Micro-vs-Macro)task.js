
console.log("Start");

setTimeout(() => {
    console.log(`setTimeout executed`);
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// Synchronous code runs first (Start, End).
// Microtasks (Promises) execute before Macrotasks (setTimeout), so "Promise" comes before "setTimeout".

//"Promise resolved" print before "setTimeout" Because Promises (Microtasks) have higher priority than the Callback Queue.

// Q: What executes first setTimeout() or Promise.then()?
// A: Promise.then() executes first because it goes to the Microtask Queue, while setTimeout goes to the Callback Queue.