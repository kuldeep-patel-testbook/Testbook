// 2D Arrays Operations
const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const arr2 = [
    [15, 17, 22],
    [24, 27, 33],
    [38, 43, 49]
];

console.log("arr1", arr1);
console.log("arr2", arr2);


// Add two array elements sum and store to third array
function addMatrix(arr1, arr2) {
    if(arr1.length === arr2.length && arr1[0].length === arr2[0].length) {
        const arr3 = []; 
        for(let i=0; i<arr1.length; i++) {
            arr3[i] = [];
            for(let j=0; j<arr1[i].length; j++) {
                arr3[i][j] = arr1[i][j] + arr2[i][j]; 
            }
        }
        return arr3;    
    }
    throw new Error("Matrics can not be added");
}

console.log("addMatrix =>", addMatrix(arr1, arr2));

// Multiply two array each elements and store to third array (arr3 = arr1[i][j] * arr[i][j])
function multiplyMatrix(arr1, arr2) {

    if(arr1.length === arr2.length && arr1[0].length === arr2[0].length) {
        const arr3 = [];
        for(let i=0; i<arr1.length; i++) {
            arr3[i] = [];
            for(let j=0; j<arr1[i].length; j++) {
                arr3[i][j] = arr1[i][j] * arr2[i][j];
            }
        }
        return arr3;
    }
    throw new Error("Matrix can not be multiply");

}
console.log("multiplyMatrix =>", multiplyMatrix(arr1, arr2));

// Subtract two array each elements and store to third array (arr3 = arr1[i][j] - arr[i][j])
function subtractMatrix(arr1, arr2) {

    if(arr1.length === arr2.length && arr1[0].length === arr2[0].length) {
        const arr3 = [];
        for(let i=0; i<arr1.length; i++) {
            arr3[i] = [];
            for(let j=0; j<arr1[i].length; j++) {
                arr3[i][j] = arr1[i][j] - arr2[i][j];
            }
        }
        return arr3;
    }
    throw new Error("Matrix can not be subtract");

}
console.log("subtractMatrix =>", subtractMatrix(arr1, arr2));


