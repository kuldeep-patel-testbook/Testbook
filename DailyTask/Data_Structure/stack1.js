
/*let mainStack = [];

function push(value) {
    mainStack.push(value);
}

function getPeek() {
    return mainStack[mainStack.length - 1];
}
function pop() {
    return mainStack.pop();
}
push(10);
push(20);
push(30);
push(40);

console.log(mainStack);
console.log(getPeek());

pop();
console.log(mainStack);
console.log(getPeek());*/

let mainStack = [];
let trackStack = [];
function push(x) {
    mainStack.push(x);
    
    if (mainStack.length == 1) { 
        trackStack.push(x);
        return;
    }
    // If current element is greater than
    // the top element of track stack, push
    // the current element to track stack
    // otherwise push the element at top of
    // track stack again into it.
    
    if (x > trackStack[trackStack.length - 1])
        trackStack.push(x);
    else
        trackStack.push(trackStack[trackStack.length - 1]);
    }

    function getMax() {
        return trackStack[trackStack.length - 1];
    }
    
    function pop() {
        mainStack.pop();
        trackStack.pop();
    }
    
    push(50);
    console.log(getMax());
    push(70);
    console.log(getMax());
    push(80);
    console.log(getMax());