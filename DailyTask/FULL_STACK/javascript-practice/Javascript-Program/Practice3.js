// 2. Check for Palindrome

const isPallindrome = (str) => {
    let reversed = "";
    
    for(let i=str.length-1; i>=0; i--) {
        reversed +=str[i];
    }

    return reversed === str;

    // const reversed = str.split('').reverse().join(''); // This is a Built In method
    // return reversed === str; 
};

const str = "anana";
console.log(isPallindrome(str));