
const convertArray = function(arr, m, n) {
    
    let length = arr.length;
    
    if(length !=m*n){
        console.log("Empty array");
        return [];
    }
    
    let convert2DArray = [];
    let row = [];
    
    for(let i=0; i<length; i++) {
        row.push(arr[i]);
        if(row.length == n) {
            convert2DArray.push(row);
            row = [];
        }
    }
    return convert2DArray;
};

const oneDArray = [1,2,3,4,5,6,7,8,9,10,11,12];
const m = 6;
const n = 2;

console.log(convertArray(oneDArray, m, n));


/*if(oneDArray.length !=m*n){
    console.log("empty array");
    return [];
}

let convert2DArray = [];
let row = [];

for(let i=0; i<oneDArray.length; i++) {
    row.push(oneDArray[i]);

    if(row.length == n){
        convert2DArray.push(row);
        row = [];
    }
}
console.log("1D Array", oneDArray);
console.log("2D Array", convert2DArray);*/
