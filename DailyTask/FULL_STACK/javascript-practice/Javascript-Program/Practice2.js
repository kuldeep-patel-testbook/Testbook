// 1. Reverse a String

const reversedStr = (str) => {
    let reversed = "";
    for(let char of str) {
        reversed = char + reversed;
    }
    return reversed;

    //return str.split('').reverse().join(''); // This is Built in Method
};

const str = "Patel";
console.log(reversedStr(str));