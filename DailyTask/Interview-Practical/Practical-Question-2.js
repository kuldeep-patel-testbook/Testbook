/* Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. */

// Two Sum
const TwoSumUsingTarget = (nums, target) => {

    if(!Array.isArray(nums)) {
        throw new Error("input must be an array.")
    } 
    if(nums.length  < 2) {
        throw new Error("array should have at least two numbers.");
    }
    if(typeof target !== "number") {
        throw new Error("target must be a number.");
    }

    const map = new Map(); // stores - numbers of index

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let comp = target - current;

        if (map.has(comp)) {
            return [map.get(comp), i];
        }

        map.set(current, i); // store - current numbeer with its index
    }
    throw new Error("no two numbers add up to the target");
}

const testResult = (nums, target) => {
    try {
        const result = TwoSumUsingTarget(nums, target);
        console.log("Result: ", result);
    } catch (error) {
        console.error(`Error Caught: ${error.message}`);
    }
}

const nums = [2, 7, 11, 15];
const target = 9;

// execute function
testResult(nums, target);