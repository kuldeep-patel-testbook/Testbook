// Write a function to return all unique elements in an array using custom 

const uniqueArr = (arr) => {

    let unique = []; // Create an empty array to store unique values.

    for(let i=0; i < arr.length; i++) { // Loop through each element of the input array.
        if(!unique.includes(arr[i])) { //Check if the current element is not already in uniqueArr.
            unique.push(arr[i]); //If it’s unique, add it to uniqueArr.
        }
    }
    return unique; //Return the new array with duplicates removed.
};

const fruits = ["Apple", "Kiwi", "Banana", "Apple", "Orange"];
console.log(uniqueArr(fruits));