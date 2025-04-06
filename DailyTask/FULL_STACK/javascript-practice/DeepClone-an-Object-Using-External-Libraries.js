// Deep Clone an Object Using External Libraries

const _= require('lodash');

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

const cloneObj = _.cloneDeep(original);

cloneObj.name = "Jack Rayan";

console.log("Original =>", original.name);

console.log("CloneObj =>", cloneObj.name);