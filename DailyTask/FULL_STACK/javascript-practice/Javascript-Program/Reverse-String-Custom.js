// Reverse a string without using .reverse()

const reverseStr = (str) => {
    let reversed = "";
    
    for(let i = str.length - 1; i >=0; i--) {
        reversed += str[i];
    }
    return reversed;
};

const string = "MERN-Stack";
console.log("Without Reverse Method => ", reverseStr(string));  // Output: Without Reverse Method =>  kcatS-NREM

// another Way

const reverseString = (str) => {
    return str.split("").reduce((rev, char) => char + rev, "")  ; 
};

console.log("Using Reduce Method => ", reverseString("KULDEEP")); // Output: Using Reduce Method =>  PEEDLUK