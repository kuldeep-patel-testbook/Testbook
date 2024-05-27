function printNGE(arr, n) {
    var next, i, j;
    for (i = 0; i < n; i++) { 
        next = -1;
        for (j = i + 1; j < n; j++) { 
            if (arr[i] < arr[j]) { 
                next = arr[j];break;
            }
        }
        console.log(arr[i] + " -- " + next);
    }
}
    
var arr = [4,5,2,25];
var n = arr.length;
printNGE(arr, n);
