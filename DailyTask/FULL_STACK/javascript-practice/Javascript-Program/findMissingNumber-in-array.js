// Find missing number in an array of n numbers.

function findMisNum(arr) {
    let n = arr.length + 1; // The actual count of numbers should be n.
    console.log(n);

    let expectedSum = (n * (n + 1) / 2); // Sum of first n natural numbers.
    console.log(expectedSum);

    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    console.log(actualSum);

    return expectedSum - actualSum; // Missing number
}

console.log("Find Missing Numbers => ", findMisNum([1,2,3,4,5,6,7,9]));

//The function finds the missing number by using the mathematical formula for the sum of the first n natural numbers.

// Calculate the Expected Sum Using the formula for the sum of the first n natural numbers:
/*
 expectedSum = n (n + 1) / 2;
​  f.ex: ( 9 * (9 + 1) / 2) = 45
*/

// Calculate the Actual Sum Using Sum all elements in the given array using .reduce().
/*
    actualSum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 9 = 37
*/

//Find the Missing Number means The missing number is simply the difference between the expected sum and the actual sum.
// ex. missingNumber = expectedSum - actualSum; // 45 - 37 = 8

/*
✅ Why Is This the Best Approach?
Why Is This the Best Approach?
Efficiency
    Time Complexity: O(n) (Single loop to sum elements)

    Space Complexity: O(1) (Uses only a few extra variables)

Handles Edge Cases
    If the first number (1) is missing, it correctly identifies that.

    If the last number (n) is missing, it also finds that.

    Works for any n without sorting or additional data structures.
*/


