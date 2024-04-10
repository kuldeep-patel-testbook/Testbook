// 1. Write a Program to reverse the queue using recursion.

function printQueue(queue) {
    while (queue.length != 0) {
        console.log(queue[0]);
        queue.shift();
    }
}

// Recursive function to reverse the queue
function reverseQueue(q) {
    // Base case
    if (q.length == 0)
        return;

    // Dequeue current
    // item (from front)
    let data = q[0];
    q.shift();

    // Reverse remaining queue
    reverseQueue(q);

    // Enqueue current
    // item (to rear)
    q.push(data);
}

let queue = [];
queue.push(22);
queue.push(12);
queue.push(56);
queue.push(27);
queue.push(30);
queue.push(45);
queue.push(85);
queue.push(92);
queue.push(58);
queue.push(80);
queue.push(90);
queue.push(100);
reverseQueue(queue);
printQueue(queue);