
const NumArr = [1, 2, 3]; //We declare an array NumArr with elements [1, 2, 3].

const MapMethod = NumArr.map(val => val * 2); // .map() creates a new array by applying the function val * 2 on each element.
console.log("Map-Method =>", MapMethod); // It does not modify the original array. // So MapMethod becomes [2, 4, 6].
// Since .map() doesn’t mutate the original array, this still logs:

console.log("NumArr after Map Method:", NumArr); // NumArr after Map Method: [1, 2, 3]

// .forEach() loops through each element and directly modifies the original array.
const ForEachMethod = NumArr.forEach((val, i, arr) => (arr[i] = val * 2)); // arr[i] = val * 2 updates the element in place.
console.log("ForEachMethod =>", ForEachMethod); // But .forEach() does not return anything, so ForEachMethod is undefined.

console.log("NumArr after forEach Method:", NumArr); // Now the original Number array is modified to: [2, 4, 6]


// Real-World Use Case:
    // Use .map() when you need a new transformed array (e.g., rendering a new UI list).
    // Use .forEach() for side effects like logging, updating database, or modifying state.