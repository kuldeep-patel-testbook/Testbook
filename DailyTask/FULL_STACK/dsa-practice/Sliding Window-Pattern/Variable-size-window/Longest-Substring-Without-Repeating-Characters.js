// Find the length of the longest substring in a given string s that contains no repeating characters.

const lengthOfLongestSubstring = function (s) {
    let start = 0;
    let end = 0;
    let maxLen = 0;
    let subStr = new Set();

    while (end < s.length) {

        if (!subStr.has(s[end])) {
            subStr.add(s[end]);
            maxLen = Math.max(maxLen, subStr.size);
            end++;
            console.log("subStr", subStr.values());
        } else {

            subStr.delete(s[start]);
            start++;
        }
    }
    return maxLen;
};

const str = "GeeksforGeeks"; // "GeeksforGeeks";
console.log(lengthOfLongestSubstring(str));


/* 
let start = 0;
This is the left pointer of our sliding window.

Start of the current substring window.

Hindi: Window का start पॉइंटर (window की शुरुआत को दिखाता है)।

let end = 0;
This is the right pointer of the window, which expands forward one character at a time.

Hindi: Window का end पॉइंटर, हर बार एक character बढ़ाता है।

let maxLen = 0;
Stores the maximum length of substring found so far without repeating characters.

Hindi: अब तक की सबसे लंबी unique substring को ट्रैक करता है।

let subStr = new Set();
A Set is used to store the unique characters in the current window.

Because Set only keeps unique values, it's perfect for checking repetitions.

Hindi: Repeating characters को avoid करने के लिए Set का यूज़ करते हैं।

while (end < s.length) {
Loop until we reach the end of the string.

We are checking each character by expanding the window.

Hindi: पूरे string पर चलने वाला main loop।

if (!subStr.has(s[end])) {
If the current character is NOT in the Set, it's unique, so we add it to the window.

Hindi: अगर character पहले नहीं है, तो उसे window में add करो।

subStr.add(s[end]);
Add the current character to the Set.

This expands the current valid substring window.

Hindi: Unique character को window में add किया।

maxLen = Math.max(maxLen, subStr.size);
Update maxLen if the current window size is the largest seen so far.

We use subStr.size to get the current window size.

Hindi: Longest unique substring की length को update करते हैं।

end++;
Move the end pointer forward to check the next character.

Hindi: Window को आगे बढ़ाते हैं।

} else {
If the current character already exists in the Set, that means there's a duplicate.

We need to shrink the window to remove the duplicate.

Hindi: Duplicate मिला, अब window को छोटा करेंगे।

subStr.delete(s[start]);
Remove the leftmost character from the Set (start of the window).

This shrinks the window from the left.

Hindi: पुराना character हटाया जिससे duplicate हट जाए।

start++;
Move the start pointer forward.

Hindi: Window का start आगे बढ़ाया।

return maxLen;
Finally, return the length of the longest valid substring without repeating characters.

Hindi: Answer return किया – सबसे लंबी unique substring की length।
*/

/*
Pattern Summary:
Concept	                    Description
Pattern	                    Two Pointers + Variable-Size Sliding Window
Data Structure	            Set for uniqueness
Time Complexity	O(n)        (Each character is added & removed at most once)
Space Complexity	        O(min(n, m)) where m = size of character set (e.g., 26 for lowercase)
*/