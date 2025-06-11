// Demonstrate event loop with setTimeout, Promise, and async/await.

console.log("Start");
setTimeout(() => {
    console.log("setTimeout code execute");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise code executed");
});
console.log("End");

/*
Synchronous code runs first (Start, End).
Microtasks (Promises) execute before Macrotasks (setTimeout), so "Promise" comes before "setTimeout".

"Promise resolved" print before "setTimeout" Because Promises (Microtasks) have higher priority than the Callback Queue.

Q: What executes first setTimeout() or Promise.then()?
A: Promise.then() executes first because it goes to the Microtask Queue, while setTimeout goes to the Callback Queue.

Example Answer:
In JavaScript, setTimeout queues its callback in the task queue, whereas Promises queue their .then callbacks in the microtask queue, 
which has higher priority. Hence, the output will be:
Start, End, Promise code executed, setTimeout code execute.
*/

