// Write a Program to iterate from 0 to n using JavaScript for loop. For each iteration, it will check if the currentnumber is odd or even,and display a message to the screen.

const n = 25;
/*const oddEvenNum = function(n) {
    for(let i=0; i<=n; i++) {

        if(i % 2 == 0) {
            console.log(i, "=>Even Number is");
        } else {
            console.log(i, "=>Odd Number is");
        }
    }
};*/

/*const oddEvenNum = (n) => {
    for(let i=0; i<=n; i++) {
        
        if(i % 2 === 0){
            console.log(i, "Is Even Number");
        } else {
            console.log(i, "Is Odd Number");
        }
    }
};*/

const oddEvenNum = (n) => {
    for(let i=0; i<=n; i++) {
        
        if(i % 2 === 0){
            console.log(i, "Is Even Number");
        } else {
            console.log(i, "Is Odd Number");
        }
    }
};

console.log(oddEvenNum(n));

/*function oddEvenNum(n) {

    let oddEvenArr = [];
    let evenArr = [];
    let oddArr = [];
    for(let i=0; i<=n; i++) {
        
        if(i % 2 === 0){
            //console.log(i, "Is Even Number");
            evenArr.push(i);
        } else {
            //console.log(i, "Is Odd Number");
            oddArr.push(i);
        }
    
    }
    oddEvenArr.push(oddArr);
    oddEvenArr.push(evenArr);
    return oddEvenArr;
};*/