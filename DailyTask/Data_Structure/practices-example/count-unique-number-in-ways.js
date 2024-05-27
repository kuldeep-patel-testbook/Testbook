// Count unique number in ways
let countWays = (rows, cols) => {
    if (rows == 0 || cols == 0)
        return 1;
    return countWays(rows, cols - 1) + countWays(rows - 1, cols);
};

const rows = 4;
const cols = 4;
console.log(countWays(rows - 1, cols - 1));