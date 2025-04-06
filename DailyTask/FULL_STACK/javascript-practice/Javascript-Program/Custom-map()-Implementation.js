// Implement a custom map() function

function customMap(arr, callback) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }

    return result;
}
const numbers = [1, 2, 3, 4, 5, 6];
const doubleNumbers = customMap(numbers, num => num * 2);
console.log(doubleNumbers);