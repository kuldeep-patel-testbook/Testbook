// defineArr.sort();
// console.log(defineArr);

function bubbleSort(defineArr) {
    //console.log(defineArr);
    let nlenth = defineArr.length;
    console.log("BubbleSorting Array");

    for(let i=1; i<=nlenth-1; i++) { // Loops for Passes

        for(let j=1; j<=nlenth-i; j++) { // Comparing Adjacent elements in a pass

            if(defineArr[j-1] > defineArr[j]) { // Swap if previous is greater
                // 3 step swapping
                let temp = defineArr[j-1]; //  defineArr[j-1] value store into temp variable.
                defineArr[j-1] = defineArr[j]; // defineArr[j] value assign to defineArr[j-1] 
                defineArr[j] = temp; // temp value assign to defineArr[j] (means old value store in temp variable and then assign) 
            }
        }
    }
}

let defineArr = [9,4,1,10,6,3,8,2,7,5];
console.log("OriginalArray", defineArr);
bubbleSort(defineArr);
console.log(defineArr);