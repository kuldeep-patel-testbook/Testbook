/*4. Write a Program to connect the n ropes in minimum cost such that the cost to connect two ropes is equal to the sum of their lengths.
    
    Input: arr[] = {1, 2, 3} , N = 3
    Output: 9
    
    Explanation: First, connect ropes of lengths 1 and 2. Now we have two ropes of
    lengths 3 and 3. Finally connect the two ropes and all ropes are connected. */


function minCost(arr, n) {
    let pq = [];
    // Adding items to the pQueue
    for (let i = 0; i < n; i++) {
        pq.push(arr[i]);
    }
    pq.sort(function (a, b) { return a - b; });
    let res = 0;
    while (pq.length > 1) {
        // Extract shortest two ropes from pq
        let first = pq.shift();
        let second = pq.shift();
        // Connect the ropes: update result
        // and insert the new rope to pq
        res += first + second;
        pq.push(first + second);
        pq.sort(function (a, b) { return a - b; });
    }
    return res;
}
let len = [4, 3, 2, 6];
let size = len.length;
console.log("Total cost for connecting" + " ropes is " + minCost(len,
    size));