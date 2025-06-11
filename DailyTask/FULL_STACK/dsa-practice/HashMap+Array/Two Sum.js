/* Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. */

/*
    Problem: Two Sum
    Input: nums = [2,7,11,15], 
    target = 9
    Output: [0,1] 
*/

const twoSum = (nums, target) => {

    if(!Array.isArray(nums)) {
        throw new Error('Input must be a array');
    }

    if(nums.length < 2) {
        throw new Error('array should have at least two numbers.');
    }

    if(typeof target !== 'number') {
        throw new Error('target must be a number');       
    }

    let map = new Map();

    for(let i=0; i < nums.length; i++) {
        let current = nums[i];
        let comp = target - current;
        
        if(map.has(comp)) {
            return [map.get(comp), i];
            //console.log([map.get(comp), i]);
        }
        //console.log(map.set(current, i))
        map.set(current, i);
    }
};

const nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target));