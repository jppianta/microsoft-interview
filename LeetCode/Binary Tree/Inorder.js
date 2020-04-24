/*
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1, null, 2, null, null, 3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

const BinaryTree = require('./BinaryTree');

module.exports = class InorderTraversal extends BinaryTree {
  name = 'Inorder Traversal'
  cases = [
    { inp: this.createTree([1, null, 2, null, null, 3]), out: [1, 3, 2] },
    { inp: this.createTree([3, 9, 20, null, null, 15, 7]), out: [9, 3, 15, 20, 7] },
    { inp: this.createTree([]), out: [] },
    { inp: this.createTree([1]), out: [1] },
    { inp: this.createTree([3, 9, 20, 6, 9, 15, 7]), out: [6, 9, 9, 3, 15, 20, 7] },
  ]

  /*
    Create a recursive function inorderRec that receives a node.
    If the node is undefined, return an empty list. Save on a variable the recursive call to the left node.
    Push the current node value to the result and return the concatanation with the recursive call to the right node.

    Time: O(n), Space: O(1)
  */
  run(root) {
    return this.inorderRec(root)
  }

  inorderRec(node) {
    if (!node) {
      return []
    }

    const left = this.inorderRec(node.left);
    left.push(node.val);
    return left.concat(this.inorderRec(node.right));
  }

  compare(res, out) {
    return this.compareArrays(res, out);
  }
}