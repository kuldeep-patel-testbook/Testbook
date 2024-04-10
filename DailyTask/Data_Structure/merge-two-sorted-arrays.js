

const arr1 = [1, 3, 5, 7];
const arr2 = [0, 2, 6, 8, 9];
const n = arr1.length;
const m = arr2.length;
let arr3 = new Array(n + m);

//const mergeArrays = (arr1, arr2, n, m, arr3) => {
function mergeArrays(arr1, arr2, n, m, arr3) {

    let i=0;
    let j=0;
    let k=0;

    while(i<n && j<m) {

        if(arr1[i] < arr2[j]) {
            arr3[k] = arr1[i];
            i++;
            k++;
        } else {
            arr3[k] = arr2[j];
            j++;
            k++;
        }
    }

    while(i<n) {
        arr3[k] = arr1[i];
        i++;
        k++;
    }

    while(j<m) {
        arr3[k] = arr2[j];
        j++;
        k++;
    }
    
    return arr3;
};

//console.log(arr3);
console.log(mergeArrays(arr1, arr2, n, m, arr3));