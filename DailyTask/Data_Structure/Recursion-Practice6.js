//3.Write a Program to print all permutations of an array.
function swap(strArr, index1, index2){
    let temp = strArr[index1];
    strArr[index1] = strArr[index2];
    strArr[index2] = temp;
}

function premute(strArr, begin, end) {
    if(begin === end) {
        console.log(strArr);
    } else {
        for(let i=begin; i<end+1; i++) {
            swap(strArr, begin, i);
        }
    }
}

function premuteArray (strArr) {
    premute(strArr, 0, strArr.length - 1);
}

const arrayToPermute = ["A", "B", "C"];
premuteArray(arrayToPermute);