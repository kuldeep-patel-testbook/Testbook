let stack = [];

let peek = function() {
    let slength = stack.length;
    return stack[slength -1];
}

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack);
stack.pop();
console.log(peek());