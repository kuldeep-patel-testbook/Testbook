// 8. Count Occurrences of Characters

const charCount = (str) => {
    const map = {}; 
    for(let char of str) {
        map[char] = (map[char] || 0) + 1; // map[char] || 0 ensures initial count is 0 if not already set.
    }
    return map;
};


console.log(charCount("KuldeepkDdeeppp"));