//How to Freeze a Specific Field?

const user = {
    id: 123,
    name: "Kuldeep Patel",
    age: 28,
    address: {
        city: "Patan",
        State: "Gujarat",
    },
}

// Freezing only the `name` field
Object.defineProperty(user, 'name', { 
writable: false, // Prevents modification
configurable: false // Prevents deletion or reconfiguration
});

console.log(user.name); // Output: Kuldeep Patel

user.name = "K Patel"; // Attempting to modify
console.log(user.name); // Output: Kuldeep Patel (unchanged)

delete user.name; // Attempting to delete
console.log(user.name); // Output: Kuldeep Patel (still exists)


//Object.freeze(user) freezes the entire object, but Object.defineProperty() allows freezing specific properties.

// Setting wiitable: false makes property read-only.

// Setting configurable: false prevents deleting or modifying property attributes.

// Nested properties need to be frozen individually.
