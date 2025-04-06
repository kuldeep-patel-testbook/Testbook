//Array Manipulation: Write a function to remove duplicates from an array and return the unique values.

function removeDuplicateArray(arr) {
    return [...new Set(arr)]; // The Set object stores only unique values, making it the best way to remove duplicates efficiently.
}

const arr = ["JS", "PHP", ".NET", "JAVA", "CSS", "PHP", "JS"];

console.log("Unique Array Result=>", removeDuplicateArray(arr));