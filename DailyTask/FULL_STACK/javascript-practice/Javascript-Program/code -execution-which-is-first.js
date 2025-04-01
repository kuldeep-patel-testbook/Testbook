// Which is the code execute first, what is the result.

// Synmchronus Code always run first call stack execution.
console.log("A");  // This is a Synchronus task, so directly logs to "A" to the console.

setTimeout(() => {
    //setTimeout(Macrotask) runs last, even with 0ms delay,because it waits until the Call Stack and Microtask Queue are empty. 
    console.log("B - setTimeout Executed"); 
    //Asynchronus - setTimeout schedules the callback to execute after 0ms, but it doesn't run immediately.
    // It goes into the TaskQueue and Waits for the Call Stack to be Empty
}, 0);

console.log("C"); // This is a Synchronus task, so directly logs to "B" to the console.

Promise.resolve().then(()=> {
    console.log("D - Promise Executed"); // Promise.then() schedules its callback in the microtask queue, 
    // which is execute right after the synchronus codes finishes but before any macro task(like setTimeout).
    // Promises run before setTimeout because the Event Loop prioritizes microtasks before moving to the task queue.
});

console.log("E"); // This is a Synchonus task, so directly logs to "E" to the console. 


/* Above Code Output like

A
C
E
D - Promise Executed
B - setTimeout Executed
*/