function isParenthesisisValid(validationString) {
    let stack = new Stack();
    for(let pos=0; pos<validationString.length; pos++) {
        let currentChar = validationString.charAt(pos);
        if(currentChar == "(") {
            stack.push(currentChar);
        } else if(currentChar == ")") {
            if(stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.isEmpty();
}
isParenthesisisValid("((()"); //false
isParenthesisisValid("() ()") // true