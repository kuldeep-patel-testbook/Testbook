
function fetchData(value) {
    return new Promise((resolve, reject) => {
        if(value < 5) {
            resolve(`The value ${value} less than 5`);
        } else {
            reject(`The value ${value} is not less than 5`);
        }
    });
}

// fetchData(10)
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

// async keyword -> Makes this function asynchronus, allowing it to use await.
async function testResult(value) {
    
    try {
        const result = await fetchData(value); // Waits for testResult(value) to complete (resolve or reject)
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

testResult(2);