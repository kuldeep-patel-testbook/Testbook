// 2.Write a Program to design a stack with the help of only queues.

function Queue(array) {
    this.array = [];
    if (array) this.array = array;
}
Queue.prototype.getBuffer = function () {
    return this.array.slice();
}
Queue.prototype.isEmpty = function () {
    return this.array.length == 0;
}
Queue.prototype.peek = function () {
    return this.array[0];
}

// Insertion:
// Time Complexity: O(1)
// Space Complexity: O(1)
Queue.prototype.enqueue = function (value) {
    return this.array.push(value);
}
// Deletion:
// Time Complexity: O(1)
// Space Complexity: O(1)
Queue.prototype.dequeue = function () {
    return this.array.shift();
};
// Access:
// Time Complexity: O(n)
// Space Complexity: O(n)
Queue.prototype.access = function (n) {
    var bufferArray = this.getBuffer();
    if (n <= 0) throw 'error'
    var bufferStack = new Queue(bufferArray);
    while (--n !== 0) {
        bufferStack.dequeue();
    }
    return bufferStack.dequeue();
}
// Search:
// Time Complexity: O(n)
// Space Complexity: O(n)
Queue.prototype.search = function (element) {
    var bufferArray = this.getBuffer();
    var bufferQueue = new Queue(bufferArray);
    while (!bufferQueue.isEmpty()) {
        if (bufferQueue.dequeue() == element) {
            return true;
        }
    }
    return false;
}
// Main Function
function QueueStack() {
    this.inbox = new Queue(); // first stack
}
QueueStack.prototype.push = function (val) {
    this.inbox.enqueue(val);
};
QueueStack.prototype.pop = function () {
    var size = this.inbox.array.length - 1;
    var counter = 0;
    var bufferQueue = new Queue();
    while (++counter <= size) {
        bufferQueue.enqueue(this.inbox.dequeue());
    }
    var popped = this.inbox.dequeue();
    this.inbox = bufferQueue;
    return popped
};

var stack = new QueueStack();
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(1);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.pop()); // 1
console.log(stack.pop()); // 9
console.log(stack.pop()); // 8
console.log(stack.pop()); // 7