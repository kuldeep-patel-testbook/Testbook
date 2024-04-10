
let isValidParenthesis = function(str) {
    const stack = [];
    /*const pairs = {'(':')','{':'}','[':']'};
    for(let char of str) {
        //console.log(char);
        if(pairs[char]) {
            stack.push(char);
        } else {
            if(stack.length === 0) return false;
            const lastOpening = stack.pop(); 
            console.log(lastOpening);
            if(pairs[lastOpening]!==char) return false;
        }
    }*/

    for(let i=0; i<str.length; i++) {
        if(str[i] == '(') {
            stack.push(str[i]);
        } else {
            console.log('str', str[i]);
            if(stack.length > 0 && peek!== str[i]) // not empty
                stack.pop();
            else 
                return false;
        }
    }
    console.log("stack-length",stack.length);
    return stack.length === 0;
}

let str = "{()()";
//str = "((()))";
console.log(isValidParenthesis(str));
