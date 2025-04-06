//Find the second largest number in an array

function secondLargest(arr) {
    
    if(arr.length < 2) return null; // Edge Case: Not enough elements.

    let first = -Infinity, second = -Infinity;

    for(let num of arr) {

        if(num > first) {
            second = first;
            first = num;
        } else if(num > second && num !== first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;  // If no second largest exists
}


const arr = [12, 35, 1, 10, 34, 1]; 
console.log(secondLargest(arr)); // Output: 34

console.log(secondLargest([10,10,10,10,10])); // Output: null (No second largest)

console.log(secondLargest([10])); // Output: null (Only one element)

