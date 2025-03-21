// Closures & setTimeout Issue

// for(var i=0; i<5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// };

// for(let i=0; i<10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// };

// OR Using Closure
for(var i=0; i<10; i++) {
    (function (index){
        setTimeout(()=> {
            console.log(index);
        }, 2000);
    }(i)); // IIFE (Immediately Invoked Function Expressions)
}

// When using var, i is shared across all iterations, leading to 5 5 5 5 5.