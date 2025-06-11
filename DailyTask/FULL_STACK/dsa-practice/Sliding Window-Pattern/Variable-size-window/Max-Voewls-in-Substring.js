
const maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    let maxx = 0;

    for (let i = 0; i < s.length; i++) {

        if(vowels.has(s[i])) {
            count++;
        }

        if(i >= k && vowels.has(s[i - k])){
            count--;
        }

        maxx = Math.max(maxx, count);


        // if (vowels.has(s[end])) {
        //     currVowels++;
        // }

        // if (end - start + 1 > k) {

        //     if (vowels.has(s[start])) {
        //         currVowels--;
        //     }
        //     start++;
        // }
        // maxVowels = Math.max(maxVowels, currVowels);
    }
    return maxx;
};

console.log(maxVowels('leetcode', 3))