// Flatten a nested array and convert its elements into a specific format using JavaScript’s built-in methods. 
// Example 1: Flatten a Nested Array of Numbers (as Strings) and Convert to Numbers

// ["1", "2", ["3", "4", "5"], "6", "7", ["8", "9"]]; or ["A", "B", ["C", "D", "E"], "F", "G", ["H", "I"]];
// Output Like = 1,2,3,4,5,6,7,8,9 - or - A,B,C,D,E,F,G,H,I

let flatArray = ["1", "2", ["3", "4", "5"], "6", "7", ["8", "9"]];
console.log("flatArray =", flatArray);

// The .flat() method removes one level of nesting from an array. flattend Array like: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let result = flatArray.flat().map(Number);

// The .map(Number) method convert all elements from strings to numbers. Convert to Numbers like: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Result => ", result); // // Output: Result => [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Example 2: Flatten a Nested Array of Letters and Convert to a Comma-Separated String

let flatArrayStr = ["A", "B", ["C", "D", "E"], "F", "G", ["H", "I"]];
console.log("flatArrayStr", flatArrayStr);

// The .flat() method removes one level of nesting from an array. flattend Array like: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
let resultStr = flatArrayStr.flat().join(', '); // Convert the array into a comma-separated string

//
console.log("Result String => ", resultStr);

// .flat() -> removes the nested arrays.
// .map(String) -> ensure all elements are strings (though )
// .join(", ") -> creates a formatted output string.


// steps

/*
✅ Step 1: .flat() Method

Removes one level of nesting in an array.

Example: ["1", "2", ["3", "4", "5"]] → ["1", "2", "3", "4", "5"]

✅ Step 2: .map(Number) Method (For Numbers Only)

Converts string numbers to actual numbers.

Example: ["1", "2", "3"] → [1, 2, 3, 4, 5, 6, 7, 8, 9]

✅ Step 3: .join(",") Method (For Strings Only)

Converts an array into a comma-separated string.

Example: ["A", "B", "C"] → "A,B,C,D,E,F,G,H,I"

*/

// Example 4: Flatten a Nested Array (Dealing with Deeply Nested Arrays)

let deepArray = ["A", ["B", ["C", "D"], "E"], "F", ["G", ["H", "I"], "J"]];
console.log(deepArray);

let resultDeepArray = deepArray.flat(Infinity).join(", ");
console.log("resultDeepArray => ", resultDeepArray);
