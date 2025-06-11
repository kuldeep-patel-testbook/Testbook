// 4. Find Largest Number in Array

const findMax = (num) => {
    //return Math.max(...num); // Math.max(...num) uses spread operator to unpack values and return max. This is a Built in Method

    //Checks if the array is empty
    if(num.length === 0) return undefined; //  This is a edge case

    // Initialize max with the first element of the array.
    let max = num[0]; // assume that first number is largest

    // Loop through the array starting from the second element.
    for(let i = 1; i < num.length; i++) {
        // If current element is greater than max, update max.
        if(num[i] > max) {
            max = num[i]; // update max if current element is greater.
        }
    }
    return max; // After the loop ends, return the final maximum value.
    
    //return num.reduce((acc, val) => (val > acc ? val : acc), num[0]); // using reduce() method
}

const numbers = [10,20,35,5];
console.log(findMax(numbers));