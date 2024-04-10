let queue = [3, 4];
queue.push(5);
queue.push(7);
queue.shift(); // 3 remove
queue.push(9);
console.log(queue[0]); // 4 front
queue.shift(); // 4 remove
queue.shift(); // 5 remove
console.log(queue[0]); // 7 front
queue.push(8);
console.log(queue[0]);
console.log(queue);