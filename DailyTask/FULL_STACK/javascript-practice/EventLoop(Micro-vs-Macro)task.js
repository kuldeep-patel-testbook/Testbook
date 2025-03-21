
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