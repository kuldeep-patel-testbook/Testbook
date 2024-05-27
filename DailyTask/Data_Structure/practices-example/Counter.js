/*
Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/
const createCounter = (n) => {
    let counter = n;
    return function() {
        return counter++;
    }
}

const counterFunction = createCounter(10);
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());

