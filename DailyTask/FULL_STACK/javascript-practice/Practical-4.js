//How to Freeze the entire object?

const user = {
    id: 123,
    name: "Kuldeep Patel",
    age: 28,
    address: {
        city: "Patan",
        State: "Gujarat",
    },
}

// Object.defineProperty(user.address, 'city', {
//     writable: false,
//     configurable: false,
// });

Object.defineProperties(user, {age: {writable: false}});

user.id = "SSSSSSS";
user.address.city  = "Mumbai"
console.log(user.age);

console.log(user.address.city);

console.log(user.age);