// 1. Write a Program to check if all the leaves of the binary tree are at the same level.

/*function checkLeafLevel(node, level, leafLevel) {

    if(node == null)
        return true;
    // If a leaf node is seen
    if(node.left == null && node.right == null) {
        
        if(leafLevel.leafLevel == 0) {
            leafLevel.leafLevel = level;
            return true;
        }

        return (level == leafLevel.leafLevel);
    }

    return checkLeafLevel(node.left, left + 1, leafLevel) && checkLeafLevel(node.right, level + 1, leafLevel);

}

function checkIfAllLeavesAtSameLevel(node) {
    let level = 0;
    return checkIfAllLeavesAtSameLevel(node, level, mylevel);
}

const result = checkIfAllLeavesAtSameLevel(root);
if(result) {
    console.log("All Leaves are at the same level");
} else {
    console.log("Leaves are not at the same level");
}*/

// 2.Write a Program to return the maximum depth of the binary tree
var maxDepth = function(root) {
    if(root === undefined || root===null) {
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};
//const root = new Node(1);
console.log(maxDepth());
