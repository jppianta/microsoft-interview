/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

const BinaryTree = require('./BinaryTree');

module.exports = class LevelOrderTraversal extends BinaryTree {
  name = 'Level Order Traversal'
  cases = [
    { inp: this.createTree([3, 9, 20, null, null, 15, 7]), out: [[3], [9, 20], [15, 7]] },
  ]

  /*
    If there is no root node, return an empty list. Create a queue with the root node and the level 0.
    While the queue is not empty, take the first item. If the there are no nodes in the return level yet,
    create a new array with the node value in it. If it is not the first, simply push it to the list.
    Add the left and the right nodes to the queue, with the increased level.  
  */
  run(root) {
    if (!root) {
      return []
    }
    const res = [];
    const queue = [[root, 0]];
    while (queue.length > 0) {
      const item = queue.shift();
      const node = item[0];
      const level = item[1];

      if (!res[level]) {
        res[level] = [node.val];
      } else {
        res[level].push(node.val);
      }

      node.left && queue.push([node.left, level + 1]);
      node.right && queue.push([node.right, level + 1]);
    }
    return res;
  }

  compare(res, out) {
    return this.compareArrays(res, out);
  }
}