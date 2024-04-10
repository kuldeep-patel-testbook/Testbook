// Identity Matrix
// Given a matrix determine if it is an identity matrix.

/*
1 0 0
0 1 0
0 0 1 
*/

/*
1 0
0 1
*/

/*
1 0 0 0
0 1 0 0
0 0 1 0
0 0 0 1
*/

const identyMatrix = [
    [1,0,0,0],
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1],
];

function checkMatrix(array) {
    
    for(let i=0; i<array.length; i++) {
        
        for(j=0; j<array.length; j++) {
            if( (i == j && array[i][j] !=1) || (i!=j && array[i][j] !=0)) {
               return false; 
            }
        }
    }
    
    return true;
}


console.log(checkMatrix(identyMatrix));