/*
Implement a function that finds the majority element in an array (an element that appears more than n/2 times), if one exists. 
*/
//here's a JavaScript implementation of a function that finds the majority element in an array:
function findMajorityElement(arr) {
    let majorityElement = arr[0]; // Assume the first element as the majority element
    let count = 1; // Count of majority element occurrences

    // Step 1: Find the potential majority element
    for(let i=1; i < arr.length; i++) {
        if(count === 0) {
            majorityElement = arr[i];
            count = 1;
        } else if(arr[i] === majorityElement) {
            count++;
        } else {
            count--;
        }
    }

    // Step 2: Verify if the potential majority element is the majority element
    count = 0;
    for(let num of arr) {
        if(num === majorityElement) {
            count++;
        }
    }

    // Step 3: Check if the potential majority element is the majority element
    if(count > arr.length / 2) {
        return majorityElement;
    } else {
        return null; // No majority element found
    }

}

const array = [2, 2, 2, 1, 1, 1, 1, 2, 2];
console.log(findMajorityElement(array)); // 2