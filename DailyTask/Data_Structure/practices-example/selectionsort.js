
// function selectionSort(arr) {
//     let n = arr.length;

//     for(let i=0; i<n-1; i++) { // n-1 passes
//         let smallest = i; // using to find the smallest element index
//         for(let j=i+1; j<n; j++) { // find the smallest

//             if(arr[j] < arr[smallest]) {
//                 smallest = j; // if condition satisfy update smallest index
//             }

//         }
//         // swap smallest element with i
//         let temp = arr[smallest];
//         arr[smallest] = arr[i];
//         arr[i] = temp;

//     }
// }


function selectionSort(arr) {
    let alen = arr.length;

    for(let i=0; i<alen-1; i++) { // alen-1 passes
        let smallest = i; // find smallest element index

        for(let j=i+1; j<alen; j++) {

            if(arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        let temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }
}


let arrSelect = [5,3,1,25,8,6,7,4,2,10,9];
console.log(arrSelect);

selectionSort(arrSelect);
console.log("selectionSortArray=>", arrSelect);