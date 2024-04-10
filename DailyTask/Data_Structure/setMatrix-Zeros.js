/*
Set entire Matrix row and column as Zeroes (Set Matrix Zeroes)
Given a Matrix arr of size M x N, the task is to set all rows and columns to zeroes if a particular element is zero, in constant space complexity.
1 1 1
1 0 1
1 1 1
*/
function setMatrixZeroes(arr) {


    const n = arr.length;
    const m = arr[0].length;

    const row = [];
    const cols = [];

    console.log(arr);

    for(let i=0; i < n; i++) {

        for(let j=0; j < m; j++) {

            console.log(arr[i][j]);

            if(arr[i][j] === 0) {
                row[i] = 1;
                cols[j] = 1;
            }


        }

    }

    console.log(row);
    console.log(cols);






    /*const n = matrix.length;
    const m = matrix[0].length;
 
    // To store which rows and columns are supposed to be marked with zeroes.
    const row = new Array(n).fill(0);
    const col = new Array(m).fill(0);
 
    // Traverse the matrix using nested loops
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // If the cell contains zero, mark its row and column as zero
            if (matrix[i][j] === 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }
 
    for (let i = 0; i < n; i++) {
        let rowString = "";
        for (let j = 0; j < m; j++) {
            // Set cells to zero if any of the row[i] or col[j] is 1
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
            rowString += matrix[i][j] + " ";
        }
        console.log(rowString);
    }*/
}
 
// Driver Code
const arr = [
    [1, 1, 2, 1],
    [3, 4, 0, 2],
    [1, 3, 1, 5]
];
 
// Function call
setMatrixZeroes(arr);