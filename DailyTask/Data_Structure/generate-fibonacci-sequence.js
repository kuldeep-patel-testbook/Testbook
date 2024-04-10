/* Write a generator function that returns a generator object which yields the fibonacci sequence.
The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

Example 1:
Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3

Example 2:
Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted
*/

/*var fibGenerator = function*() {
    // short code
    // let [prev, current] = [0, 1];
    // while (true) {
    //     yield prev;
    //     [prev, current] = [current, prev + current];
    // }

    // Other Way
    // let prev = 0, current = 1;
    // while (true) {
    //     yield prev;
    //     let temp = prev + current;
    //     prev = current;
    //     current = temp;
    // }
};*/

const fibGenerator = function* () {
    let [prev, curr] = [0, 1];

    while (true) {
        yield prev;
        [prev, curr] = [curr, prev + curr];
    }
}

const fibonacciGeneatorInstance = fibGenerator();
const callCount = 8;
for (let i = 0; i < callCount; i++) {
    const result = fibonacciGeneatorInstance.next().value;
    console.log(result);
}