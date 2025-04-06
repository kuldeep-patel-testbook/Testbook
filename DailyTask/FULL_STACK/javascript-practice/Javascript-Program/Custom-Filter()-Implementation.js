//  Custom filter() Implementation

function customFilter(arr, callback) {
    let result = [];

    for(let i=0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [1,2,3,4,5,6, 10];
console.log(customFilter(numbers, num => num % 2 === 0));


console.log(customFilter([1,3,5,7,9], num => num % 2 === 0));