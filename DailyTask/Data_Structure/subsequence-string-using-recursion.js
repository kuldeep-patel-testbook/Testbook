//  Generate all subsequence of a string.

const generate = function(str, seq, i) {

    // Base Case
    if(i == str.length) {
        console.log(seq); return;
    }

    // Recurssion Opration 
    generate(str, seq + str[i], i+1);
    generate(str, seq, i+1);
}

const str = "abcd";
generate(str,"",0);