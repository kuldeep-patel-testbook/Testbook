console.log("Start execute");

setTimeout(() => {
    console.log('Inside setTimeout');
}, 0);

console.log("End execute");



// Synchronous code runs first, because Start, End are printed immediately.
// setTimeout with 0ms delay it is pushed to the event queue and executed after the main script. so Synchronous code runs first and then printed settimeout value.