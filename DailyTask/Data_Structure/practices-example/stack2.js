function transfer(s1, s2, n) {
    for (i = 0; i < n; i++) {
        // Store the top element
        // in a temporary variable
        var temp = s1[s1.length-1];
        // Pop out of the stack
        s1.pop();
        // Push it into s2
        s2.push(temp);
    }
}

// Function to reverse a stack using another stack
function reverse_stack_by_using_extra_stack(s,n) { 
    var s2 = [];
    var i;
    for (i = 0; i < n; i++) {
        // Store the top element
        // of the given stack
        var x = s[s.length-1];
        // Pop that element
        // out of the stack
        s.pop();
        transfer(s, s2, n - i - 1);
        s.push(x);
        transfer(s2, s, n - i - 1);
    }
}
var n = 5;
var s = [];
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
reverse_stack_by_using_extra_stack(s, n);
var i;
for (i = 0; i < n; i++) {
    console.log(s[s.length-1] + ' ');
    s.pop();
}


