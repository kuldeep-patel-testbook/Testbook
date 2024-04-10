/*
Given a square matrix mat, return the sum of the matrix diagonals.
Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
Example:
1 2 3
4 5 6
7 8 9
*/

const InputArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let n = InputArr.length;
sum = 0;

// First Way
/*for(let i=0; i<n; i++) {
    sum +=InputArr[i][i];
}
let i=0;
let j = n-1;
while(i<n && j >=0) {
    sum += (InputArr[i][j]);
    i++;
    j--;
}
if(n % 2 != 0) {
    sum -= InputArr[(n-1)/2][(n-1)/2]; 
}*/

// Second Best Way Example [Its a Simple and Standard Way]
for(let i=0; i<n; i++) {
    sum += InputArr[i][i];
    const j = n-i-1;
    //console.log(j);
    if(j!=i) {
        sum +=InputArr[i][j];
    }
}
console.log(sum);