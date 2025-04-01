//  What will be output for this program?

for(var i=0; i<3; i++) { //The loop runs three times, updating 'i' in each operation.
    setTimeout(() => { // The key point setTimeout() is aysnchronus, meaning it does not execute immediately, 
    // it register a callback function to be executed after 1 second
        console.log(i);
    }, 1000);
}
/*
output like
3
3
3
*/

/*
    What Happens When setTimeout() Executes?
    - The loop completes before setTimeout() executes because Javascript is single-threaded and runs the loop synchronusly.
    - By the time the delayed function runs after 1 second, the value of 'i' is already 3 (Since the loop has finished running)
    - Since var is function-scoped, all callbacks inside setTimeout share the same 'i' reference.
    - Thus, all three callbacks print 3 instead of 0,1,2
*/

// OR How to Fix This Issue?
//Use let instead of var
for(let i=0; i<3; i++) {
    setTimeout(()=> {
        console.log(i);
    }, 1000);
}

/*
    Why Does let Work?
    - 'let' is block-scoped, meaning each iteration gets its own separate copy of i.
    - Each callback in setTimeout() captures the correct value of i at that moment.
*/