 // Create closure-based counter function.

 // Simple Counter
function counter() {
    let count = 1;

    return function innerCounter() {
        return count++;
    }
}

// const counterClosure = counter();
// console.log(counterClosure());
// console.log(counterClosure());

// The createCounter function returns an object with increment and decrement methods.

function createCounter () {
    let count=0;

    return {
        increment : () => {
            count++;
            console.log(count);
        },
        decrement : () => {
            count--;
            console.log(count);
        }
    }
}

const counterObj = createCounter();
counterObj.increment();
counterObj.increment();
counterObj.increment();

counterObj.decrement();
counterObj.decrement();