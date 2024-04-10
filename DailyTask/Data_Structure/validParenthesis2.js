
let isValidParenthesis = function (str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            stack.push(str[i]);
        } else {
            if (stack.length === 0) return false;
            const peek = stack.length - 1;
            if ((str[i] == ')' && stack[peek] == '(') ||
                (str[i] == '}' && stack[peek] == '{') ||
                (str[i] == ']' && stack[peek] == '[')
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    console.log(stack);
    console.log(stack.length === 0);
    return stack.length === 0;
}

/*let isValidParenthesis = function(str) {
    let stack = [];
    let pairs = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    for(let char of str) {

        if(pairs[char]) {
            stack.push(char);
        } else {
            if(stack.length === 0) return false;
            let isLastOpening = stack.pop();
            if(pairs[isLastOpening]!== char) return false; 
        }
    }

    return stack.length ===0;
}*/

const str = "{({})[]}{}";
const result = isValidParenthesis(str);
console.log(`Its a valid parenthis: ${result}`);