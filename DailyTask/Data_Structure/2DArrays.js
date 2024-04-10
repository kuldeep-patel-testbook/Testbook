
// const array  = [
//     [2,5,6],
//     [1,4,3],
//     [7,9,8]
// ];

// let sum = 0;
// for(let i=0; i<array.length; i++){
//     //console.log(i);
//     for(let j=0; j < array.length; j++){
//         //console.log(j);
//         console.log(array[i][j]);
//         sum += array[i][j];
//     }
// }
// console.log(sum);

// Transpose an array
/*const transposeArray = [
    [1,2],
    [3,4]
];*/

const transposeArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(transposeArray);

// 1st Way
for(let i=0; i<transposeArray.length; i++) {
    //console.log(i);
    for(let j=0; j<i; j++) {
        //console.log("swap");
        const tmp = transposeArray[i][j];        
        transposeArray[i][j] = transposeArray[j][i];
        transposeArray[j][i] = tmp; 
        //console.log(transposeArray[i][j]);
    }
}

//2nd Way
// for(let i=0; i<transposeArray.length; i++) {
//     for(let j=0; j<i; j++) {
//         if(i<j){
//             const tmp = transposeArray[i][j];        
//             transposeArray[i][j] = transposeArray[j][i];
//             transposeArray[j][i] = tmp;
//         }
//     }
// }

console.log(transposeArray);