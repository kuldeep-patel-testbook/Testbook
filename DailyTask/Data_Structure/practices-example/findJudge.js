const findJudge = function(n, trust) {
    // count the truse relationships
    const hashPerson = new Array(n+1).fill(0);
    const mapPerson = new Array(n+1).fill(0);

    // Iterate through the trust relationships
    for (const [a, b ] of trust) {
        hashPerson[a]++;
        mapPerson[b]++;
    }
    console.log(hashPerson);
    console.log(mapPerson);

    // Check for town judge
    for(let i=1; i<=n; i++) {
        if(hashPerson[i] === 0 && mapPerson[i] === n-1) {
            return i; // found the town judge
        }    
    }
    return -1; // no town judge found
}

const n = 3;
const trust = [[1,3],[2,3]];
const result = findJudge(n, trust);
console.log(result);

