
// Naive Approach for Finding Duplicates (Brute Force method)

/*function findDuplicates(arr) {
    
    let duplicates = new Set();
    for(let i=0; i < arr.length; i++) {

        for(j= i+1; j<arr.length; j++) {

            if(arr[i] === arr[j]) {
                 
                duplicates.add(arr[i]);
                console.log("Duplicate found:", arr[i]);
            }
            
        }

    }

    return [...duplicates];

    // Time Complexity O(N²) (because for every element, you're checking all other elements).
    // Space Complexity O(1) (no extra data structures used).
}*/

function findDuplicates(arr) {

    /* 
    // This is a two pointer approch
    if(arr.length === 0) return 0;
    arr.sort((a,b) => a-b);
    const duplicate = new Set();
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1]) {
            duplicate.add(arr[i]);
        }
    }
    return [...duplicate]; */
    

    if(arr.length === 0) return 0;
    let seen = new Set();
    let duplicates = new Set();

    for(let num of arr) {

        if(seen.has(num)){
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return [...duplicates];
}

const nums = [1,5,8,5,7,8,2,1,6];

console.log(findDuplicates(nums))