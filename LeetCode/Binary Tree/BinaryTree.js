const Problem = require('../../Problem.js');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinaryTree extends Problem {
  /*
    Creates a binary tree from an array
    Example:
    [3,9,20,null,null,15,7],
       3
      / \
     9  20
       /  \
      15   7
  */
  createTree(arr) {
    return this.createTreeRec(arr, 0);
  }

  createTreeRec(arr, idx) {
    if (idx >= arr.length || arr[idx] === null) {
      return null;
    } else {
      const n = new Node(arr[idx]);
      n.left = this.createTreeRec(arr, (idx * 2) + 1);
      n.right = this.createTreeRec(arr, (idx * 2) + 2);
      return n;
    }
  }

  /*
    For each element, if the element is also an array, make the recursive call.
    If not, simply compare both elements
  */
  compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((el, idx) => {
      const el2 = arr2[idx];
      if (el instanceof Array && el2 instanceof Array) {
        return this.compareArrays(el, el2);
      } else {
        return el === el2;
      }
    })
  }
}