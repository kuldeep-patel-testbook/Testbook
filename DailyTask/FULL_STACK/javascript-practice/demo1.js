
// X = 30
// console.log(`X value is ${X}`);

// var X = 10;

// console.log(`X value is ${X}`);


// Call Stack Example
function abc() {
    console.log('abc executed');
    debugger;
    xyz();
    console.log('abc executed after xyz ');
}

function xyz() {
    console.log('xyz executed');
    debugger;
    lastOne();
    console.log('xyz executed after lastOne ');
}

function lastOne() {
    debugger;
    console.log('lastOne executed');
}

debugger;
abc();