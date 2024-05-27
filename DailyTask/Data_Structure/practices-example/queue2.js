//2. Write a Program to sort the queue.

function minIndex(q, sortedIndex) {
    let min_index = -1
    let min_val = 999999999999
    let n = q.length
    for (let i = 0; i < n; i++) {
        let curr = q.shift()
        // q.get() / This is dequeue() in C++ STL
        // / we add the condition i <= sortedIndex
        // / because we don't want to traverse
        // / on the sorted part of the queue,
        // / which is the right part.
        if (curr <= min_val && i <= sortedIndex) {
            min_index = i
            min_val = curr
        }
        q.push(curr) // This is enqueue() in
        // / C++ STL
    }
    return min_index
}
// / Moves given minimum element to
// / rear of queue
function insertMinToRear(q, min_index) {
    let min_val = 0
    let n = q.length
    for (let i = 0; i < n; i++) {
        let curr = q.shift()
        if (i != min_index)
            q.push(curr)
        else
            min_val = curr
    }
    q.push(min_val)
}
function sortQueue(q) {
    for (let i = 1; i < q.length + 1; i++) {
        let min_index = minIndex(q, q.length - i)
        insertMinToRear(q, min_index)
    }
}
let q = []
q.push(30)
q.push(11)
q.push(15)
q.push(4)
// / Sort queue
sortQueue(q)
// / Print sorted queue
while (q.length > 0) {
    console.log(q.shift())
}