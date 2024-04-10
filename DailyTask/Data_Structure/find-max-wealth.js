// Richest Customer Wealth
function findMaxWealth(arr) { //  Find the maximum row sum  
    let maxWealth = 0;
    for(let i=0; i<arr.length; i++) {
        let wealth = 0;
        // console.log(arr[i].length);
        for(let j=0; j < arr[i].length; j++) {
            wealth += arr[i][j];   
        }
        maxWealth = Math.max(maxWealth, wealth); // using Math.max method get maxWealth value.
        // using if condition get maxWealth Value
        /*if(wealth > maxWealth) {
            maxWealth = wealth;
        }*/
    }
    return maxWealth;
}

const accounts = [
    [2,8,9],
    [8,8,8],
    [4,7,6]
];

console.log(findMaxWealth(accounts));