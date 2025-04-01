// Write a code return Promise.
//This JavaScript function returns a Promise that resolves after 2 seconds.

// Function that returns a Promise
function fetchData() {
    return new Promise((resolved) => {
        // Creating a new Promise. It takes function as an argumant with 'resolved' as the parameter.
        setTimeout(() => {
            //Simulates an asynchronus operation like fetching data from an API.

            resolved("Fetch Data Executed After 2 seconds")
            // Resolves the Promise after 2 seconds with a success message.
        }, 2000);
    });
}

// Call the function and handle the Promise
fetchData().then((data) => console.log(data));
// When the Promise resolves, 'then()', executes, printing the resolved value.


/*
- What is a Promise?
    A Promise is an asynchronus operation that:
    1. Pending - The Operation is still in progress.
    2. Resolved(Fulfilled) -> The operation completed successfully.
    3. Rejected -> The Opration failed.
*/