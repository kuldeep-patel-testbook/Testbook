
const foo = function () { // Function foo is defined as a regular function.
    // Regular functions have their own this, which is determined by how they are called.
    console.log(this.name);

    // bar is defined as an arrow function inside foo.
    const bar = () => { 
        // Arrow functions do not have their own this. Instead, they inherit this from their lexical (outer) scope. means they inherit this from the surrounding function.
        console.log(this.name); // Output like Kuldeep
        //Here, bar is defined inside foo, so it inherits this from foo, which is { name: "Kuldeep" }.
    }
    bar();
}

foo.call({name: "Kuldeep"});