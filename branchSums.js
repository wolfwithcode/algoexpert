// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

// Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

// Sample Input
// tree = 1
// / \
// 2 3
// / \ / \
// 4 5 6 7
// / \ /
// 8 9 10

// Sample Output
// [15, 16, 18, 10, 11]
// // 15 == 1 + 2 + 4 + 8
// // 16 == 1 + 2 + 4 + 9
// // 18 == 1 + 2 + 5 + 10
// // 10 == 1 + 3 + 6
// // 11 == 1 + 3 + 7
// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function travelTree(nodeHistoryStack, binaryTree) {
    if (!binaryTree.left && !binaryTree.right)
      console.log("nodeHistoryStack ", [...nodeHistoryStack, binaryTree.value]);
    if (binaryTree.left)
      travelTree([...nodeHistoryStack, binaryTree.value], binaryTree.left);
    if (binaryTree.right)
      travelTree([...nodeHistoryStack, binaryTree.value], binaryTree.right);
  }
  
  function sumArray(array) {
    if (!array) return 0;
    return array.reduce((acc, val) => acc + val, 0);
  }
  function branchSums(root) {
    // Write your code here.
    const result = [];
    const travelTree = (nodeHistoryStack, binaryTree) => {
      if (!binaryTree) {
        // const sum = sumArray([...nodeHistoryStack]);
        // console.log("sum ", sum);
        // result.push(sum);
      } else {
        if (!binaryTree.left && !binaryTree.right) {
          console.log("nodeHistoryStack ", [
            ...nodeHistoryStack,
            binaryTree.value,
          ]);
          const sum = sumArray([...nodeHistoryStack, binaryTree.value]);
          console.log("sum ", sum);
          result.push(sum);
        }
        if (binaryTree.left)
          travelTree([...nodeHistoryStack, binaryTree.value], binaryTree.left);
        if (binaryTree.right)
          travelTree([...nodeHistoryStack, binaryTree.value], binaryTree.right);
      }
    };
  
    travelTree([], root);
  
    console.log("root ", root);
    console.log("result ", result);
    return result;
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  