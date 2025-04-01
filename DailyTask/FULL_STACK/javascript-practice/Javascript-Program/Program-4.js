// What will be output?

var num = 4; // Is Declared in the global Scope.
function outer() {
    var num = 2; // Inside outer(), a new variable is declared var num = 2, which is local to outer().
    function inner() { // Then, inner is called.
        //Due to hoisting, JavaScript moves var num; declaration to the top of inner(), but it remains undefined initially.
        num++; // Reference Error Risk, Hoisting issue. num++ tries to increment an undefined variable, resulting in NaN.
        
        var num = 3; // Is a New declaration inside inner();
        console.log("num", num); //Final Value: num = 3 (after declaration).
    }
    inner();
}
outer();

