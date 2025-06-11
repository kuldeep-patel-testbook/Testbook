
const sorted = [1,2,2,3,4,5,5];

// Brute Force Approch
/*function removeDuplicate(sorted) {

    let result = [];
    for(let i=0; i<sorted.length; i++) {
    let isDuplicate = false;

        for(let j = 0; j < sorted.length; j++) {
            
            if(sorted[i] === result[j]) {
                isDuplicate = true;
                break;
            }

        }

        if(!isDuplicate) {
            result.push(sorted[i]);
        }

    }
    return result;

}*/

// Using In-Built Javascript Methods...
function removeDuplicate(sorted) {
    for (let i = 0; i < sorted.length - 1; i++) {  // O(n) time complexity (Linear Nature)
        
        if(sorted[i] === sorted[i+1]){ 
           sorted.splice(i+1, 1); // O(1) Space Complexity
           i--;
        }
    }
    return sorted;
    // Time Complexity - O(n)
    // Space Complexity - O(1)
}
console.log("Using In-Built Javascript Methods =>", removeDuplicate(sorted));

// Without JS Methods  --- Two Pointer Approch
const nums = [1,2,2,3,4,5,5,6,7,8,8,9];
function removeDuplicateCustom(nums) {
    if(nums.length === 0) return 0;
    
    let i = 1;   // first pointer

    for(let j=1; j<nums.length; j++) {
        
        //console.log(`nums[j] -> ${nums[j]} !== nums[j-1] -> ${nums[j-1]}  =>`, nums[j] !== nums[j-1]);
        
        if(nums[j] !== nums[j-1]){
            nums[i] = nums[j];

            //console.log(`nums[i] = nums[j];  => ${nums[i]} = ${nums[j]}`);
            i++;
        }
    }
    nums.length = i;
    return nums;

}

console.log(removeDuplicateCustom(nums));

// function removeDuplicate(sorted) {
    
//     let index = 1;

//     for(let i=1; i<sorted.length; i++) {
        
//         if(sorted[i] !== sorted[i - 1]) {
//             sorted[index] = sorted[i];
//             index++;
//         }
//     }
//     sorted.length = index;
    
//     return sorted;
// }

