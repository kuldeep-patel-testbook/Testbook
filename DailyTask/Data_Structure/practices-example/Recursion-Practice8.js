/* 5. Write a Program to print a Pascal’s Triangle.
Example:- 
         1
        1 1
       1 2 1
      1 3 3 1
     1 4 6 4 1
    1 5 10 10 5 1
*/

const printPascal = function(n) {
    for(let line = 1; line <= n; line++) {

        //console.log("line=>", line);
        let C = 1;
        for(let i=1; i <= line; i++) {
            //console.log("i=>", i);
            //console.log(C+" ");
            C = C * (line - i) / i;

            console.log(C+" ");
        }
    }
}

printPascal(6);