// Missing Numbers in array 
//using includes methods [its not use becuase this time consuming]
/*function missingNum(arr, n) {
    
    for(let i=1; i<n; i++) {
        if(arr.includes(i) == false) { // includes is a linear search beacuase of every element check in array 
            return i;
        }
    }
}*/

//using sort methods [its not use becuase this time consuming]
// function missingNum(arr, n) {
//     arr.sort(); // becuase of sorting method use loops and nested loops [its use bubble sort algorithms]
//     for(let i =0; i< n-1; i++) { //Iteraing the sorted array
//         if(arr[i] != i+1) {
//             return i+1;
//         }
//     }
// }

// use best possible methods
function missingNum(arr, n){

    let total = n*(n+1)/2; // total find with this formula
    console.log(total);
    
    let currentTotal = 0;
    for (i=0; i<n-1; i++) {
        currentTotal += arr[i]; // current array elements total 
    }
    return total - currentTotal; // find missing elements using total - currentTotal
}

const arr = [1,5,6,8,4,3,7,9,2];
const n = 10;
let result = missingNum(arr, n);
console.log(result);