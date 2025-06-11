// Another Example

console.log(a);
console.log(b);
var a = 5;
var b = a;
console.log("===========");

var a = 5;
console.log(a++);
console.log(a);


console.log(1 < 2 < 3); // true

console.log(3 > 2 > 1);  // false

const foo = () => {
    console.log(this.name); // Output like undefined because  Arrow Functions do not have their own this.
    // .call, .apply and .bind() cannot change this for arrow functions.
    // However, it does not work with arrow functions because arrow functions ignore the this value passed via .call(), .apply() or bind()
    // If you need a dynamic this, use a regular function instead of an arrow function.
}
foo.call({name: "Kuldeep Patel"}); // Output: undefined

/*How to Fix This?
If you want this to refer to { name: 'Kuldeep Patel' }, use a regular function instead of an arrow function:*/

const foos = function() {
    console.log(this.name);
}
foos.call({name: "Kuldeep Patel"}); // Output: Kuldeep Patel
