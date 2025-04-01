// Return resolve if Value is Less Than 5 Using Promise
/*
    This code uses JavaScript Promises and async/await to check whether a given number is less than 5.
    If the number is less than 5, the function resolves the Promise; otherwise, it rejects it.
*/
function checkValue(value) { // checkValue(value) Function returns a Promise

    return new Promise((resolve, reject) => {
        if(value < 5 ) { // If value < 5, it resolves with a success message
            resolve(`The value ${value} is less than 5`);
        } else { // otherwise, it rejects with an error  message.
            reject(`The value ${value} is not less than 5`);
        }
    })
}
// async keyword -> Makes this function asynchronus, allowing it to use await.
async function checkvalidate(value) { 
    try {
        let result = await checkValue(value); // Waits for checkValue(value) to complete (resolve or reject)
        console.log(result) // If resolved, stores the result in result and logs it.
    } catch (error) {
        console.log(error); // If rejected, it jumps to the catch block and logs the error.
    }
}
checkvalidate(3); //Calls checkValidate(3), which internally calls checkvalue(3)
// Since 3 < 5, means 3 is less than 5, so resolve() is triggered, and we get success result.

// OR 

/*function checkValue(value) { // checkValue(value) Function returns a Promise 
    return new Promise((resolve, reject) => {
        if(value < 5) { // If value < 5, it resolves with a success message
            resolve(`Resolved ${value} is less than 5`);
        } else { // otherwise, it rejects with an error  message.
            reject(`Rejected ${value} is not less than 5`);
        }
    });
}

checkValue(3) // checkValue(value) Function returns a Promis
.then((data) => console.log(data)) // handles the resolved case when value < 5
.catch((error) => console.log(error)) // handles the rejected case when value  >=5
*/