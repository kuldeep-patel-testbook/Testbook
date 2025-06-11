// 6. Fibonacci Sequence (n terms)

const fibonacci = (n) => {
    const result = []; //  Create an empty array to store the Fibonacci sequence.
    let a = 0; b = 1; // Start the sequence with 0 and 1.

    for(let i=0; i<n; i++) { // Loop n times to generate n terms.
        result.push(a); // Push the current term into the result array.

        let temp = a + b; // Calculate the next term.
        a = b; //  Move b to a.
        b = temp; // Set new b as the next term.
    }
    return result; // Return the full sequence.
};

console.log(fibonacci(7));


