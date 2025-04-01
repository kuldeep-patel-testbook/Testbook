// Write a function to find duplicate strings in an array.

/*function findDuplicateArr(arr) {
    const counts = {};
    arr.forEach(item => counts[item] = (counts[item] || 0) + 1);
    return Object.keys(counts).filter(key => counts[key] > 1 );
}
console.log(findDuplicateArr(["apple", "orange", "watermelon", "apple", "graps", "kiwi", "orange"]));*/

function findDuplicateWords(arr) {
    console.log(arr.length); // Prints the length of the input array

    let seen = new Set();
    let duplicates = new Set();

    for(let str of arr) {
        
        if(seen.has(str)) {
            duplicates.add(str);
        } else {
            seen.add(str);
        }
    }

    return [...duplicates]; // Convert set to the array

}

const findWords = ["Mango", "Apple", "Kiwi", "Orange", "Apple", "Banana", "Kiwi"];
console.log(findDuplicateWords(findWords));