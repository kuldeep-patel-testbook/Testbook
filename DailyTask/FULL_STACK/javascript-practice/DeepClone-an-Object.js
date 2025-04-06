
// Deep Clone an Object: Implement a function to create a deep copy of a nested object without using external libraries.
// Solution Using Recursion

function deepClone(obj) {
    
    if(obj === null || typeof obj !== 'object') {
        return obj
    }

    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

const original = {
    id: 123,
    name: "Kuldeep Patel",
    age: 28,
    address: {
        city: "Patan",
        state: "Gujarat",
    },
    skills: ["Javascript", "React", "Node.Js, Magento, CorePHP"]
};


const cloneObj = deepClone(original);

cloneObj.address.city = "ahmedabad";
cloneObj.skills = ["Javascript", "React", "Node.Js, Magento, CorePHP", "AWS", "CakePHP", "Laravel"];

console.log("original=>", original.address.city);
console.log("cloneObj=>", cloneObj.address.city);


console.log("original=>", original.skills);
console.log("cloneObj=>", cloneObj.skills);