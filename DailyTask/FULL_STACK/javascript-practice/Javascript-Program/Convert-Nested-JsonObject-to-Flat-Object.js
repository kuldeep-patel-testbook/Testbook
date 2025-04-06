// Convert nested JSON object to a flat object

/*
✅ Steps to Flatten a Nested JSON Object
    Loop through each key in the object using recursion.

    Check if the value is an object:

        If yes, recursively call the function and update the key path.

        If no, store the key-value pair in the result.

Handle nested arrays properly by including the index in the key path.

*/

function flattenObject() {
    
}


const nestedJson = {
    user: {
        name: "Kuldeep",
        address: {
            city: "Patan",
            state: "Gujarat"
        },
        contact: {
            phone: "0123456987",
            email: "kp@test.com"
        }
    },
    isActive: true
};

// Flattned Object Output

console.log(flattenObject(nestedJson));
