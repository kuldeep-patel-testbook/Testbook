
// Write a function to return all unique elements in an array
const duplicateArr = (arr) => {
    return [...new Set(arr)]; // Spread ... expands set back to array and Set Stores a Unique values

}
const fruits = ["Apple", "Kiwi", "Banana", "Apple", "Orange"];
console.log(duplicateArr(fruits));