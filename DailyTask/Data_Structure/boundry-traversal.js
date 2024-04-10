
const arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

const traverseArray = (arr) => {

    let ans = [];
    const n = arr.length;
    const m = arr[0].length;

    
    // First Row i=0, j=0 to m-1 => [1 2 3 4]  
        for(let j=0; j<=m-1; j++)
            ans.push(arr[0][j]);

    // Last Column j=m-1, j=1 to n-1 [8 12 16]

        for(let i=1; i<=n-1; i++)
            ans.push(arr[i][m-1]); 

    // Last Row i=n-1, j=m-2 to 0 [15 14 13]
        for(let j=m-2; j>=0; j--)
            ans.push(arr[n-1][j]);

    // First Column j=0, i=n-2 to 1 [9 5]
        for(let i=n-2; i>=1; i--)
            ans.push(arr[i][0]);

    return ans;
};

console.log(traverseArray(arr));
