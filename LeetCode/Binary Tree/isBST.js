/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

const BinaryTree = require('./BinaryTree');

module.exports = class IsBST extends BinaryTree {
  name = 'Is BST'
  cases = [
    { inp: this.createTree([2, 1, 3]), out: true },
    { inp: this.createTree([]), out: true },
    { inp: this.createTree([1]), out: true },
    { inp: this.createTree([5, 1, 4, null, null, 3, 6]), out: false },
    { inp: this.createTree([10, 5, 15, null, null, 6, 20]), out: false },

  ]

  /*
    Create a recursive function `isBSTRec` that receives a node, a low bound and a high bound.
    Save the recursive call to the left, replacing the higher bound with the current node val.
    Save the recursive call to the right, replacing the lower bound with the current node val.
    Return the return on both sides and if the current value is between both bounds.
    
    Time: O(n), Space: O(1)
  */
  run(root) {
    return this.isBSTRec(root);
  }

  isBSTRec(node, low, high) {
    if (!node) {
      return true
    }

    const left = this.isBSTRec(node.left, low, node.val);
    const right = this.isBSTRec(node.right, node.val, high);
    return left && right && (low === undefined || node.val > low) && (high === undefined || node.val < high);
  }
}