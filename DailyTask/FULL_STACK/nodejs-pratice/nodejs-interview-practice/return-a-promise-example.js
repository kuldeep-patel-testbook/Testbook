// Write a function that returns a Promise.

function fetchData() { //The function fetchData returns a Promise.
    return new Promise((resolve) => {
        //Inside the Promise, a setTimeout is used to simulate a delayed asynchronous operation (like fetching data from a server).
        setTimeout(() => {
            resolve("Data recieved");
        }, 1000); //After 1 second, the Promise resolves with the value "Data Received".    
    });
}

//When fetchData() is called, it returns a Promise immediately (before the timeout completes).
//The returned Promise is pending until setTimeout completes.
fetchData()
.then((data) => console.log(data)) //This runs when the Promise resolves successfully.
.catch((err) => console.log(err)); //This runs only if the Promise rejects (which is not happening in this case).

