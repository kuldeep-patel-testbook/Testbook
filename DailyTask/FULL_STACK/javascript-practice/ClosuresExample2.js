
// The createCounter function returns an object with increment and decrement methods.
function createCounter() {
    let count = 0; //count is priivate due to closure and retains its value between function calls.

    return {
        increment: () => {
            count++;
            console.log("Count", count);
        },

        decrement: () => {
            count--;
            console.log("Count", count);
        }

    }

}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();