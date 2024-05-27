// String Pallindrome

// Check if string is pallindrome or not
function isPallindrome(str) {
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

const str = "madam";
console.log(isPallindrome(str));


//Check Pallindrome without reverse string
const checkPallindrome = (string) => {
    let n = string.length;
    let s = 0;
    let e = n-1;

    while(s<e) {

        if(string[s] !== string[e]) {
            return false;
        } else {
            s++;
            e--;
        }
    }
    return true
}

let string = "racecar";
console.log("checkPallindrome", checkPallindrome(string));