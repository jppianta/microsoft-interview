/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

const BinaryTree = require('./BinaryTree');

module.exports = class ZigZagTraversal extends BinaryTree {
  name = 'ZigZag Traversal'
  cases = [
    { inp: this.createTree([3, 9, 20, null, null, 15, 7]), out: [[3], [20, 9], [15, 7]] },
    { inp: this.createTree([]), out: [] },
    { inp: this.createTree([1]), out: [[1]] },
    { inp: this.createTree([3, 9, 20, 6, 9, 15, 7]), out: [[3], [20, 9], [6, 9, 15, 7]] },
  ]

  /*
    If there is no root node, return an empty list. Create a queue with the root node, the level 0 and the direction.
    While the queue is not empty, take the first item. If the there are no nodes in the return level yet,
    create a new array with the node value in it. If it is not the first, push it to the end if it is zigging
    and put in the begging of the list if it is zagging.
    Add the left and the right nodes to the queue, with the increased level and not the direction.
    
    Time: O(n), Space: O(n)
  */
  run(root) {
    if (!root) {
      return []
    }
    const res = [];
    const queue = [[root, 0, true]];
    while (queue.length > 0) {
      const item = queue.shift();
      const node = item[0];
      const level = item[1];
      const toLeft = item[2]

      if (!res[level]) {
        res[level] = [node.val];
      } else {
        if (toLeft) {
          res[level].push(node.val);
        } else {
          res[level].splice(0, 0, node.val)
        }
      }

      node.left && queue.push([node.left, level + 1, !toLeft]);
      node.right && queue.push([node.right, level + 1, !toLeft]);
    }
    return res;
  }

  compare(res, out) {
    return this.compareArrays(res, out);
  }
}