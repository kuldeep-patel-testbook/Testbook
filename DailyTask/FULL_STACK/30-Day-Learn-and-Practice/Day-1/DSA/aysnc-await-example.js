// async/await provides a cleaner syntax for handling asynchronous operations and Promises.

async function asyncAwait() {
    console.log("Start");
    const result = await new Promise(resolve => setTimeout(() => resolve("Promise Done"), 1000));
    console.log(result);
    console.log("End");
}

asyncAwait();

/*
Example Answer:
async/await makes asynchronous code look synchronous, making it more readable. 
The await keyword pauses execution until the Promise is resolved. Output will be:
Start, (after 1 second) Promise Done, End.
*/