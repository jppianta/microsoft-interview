# Binary Tree

## Problems

### 102. Binary Tree Level Order Traversal
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,
```javascript
    3
   / \
  9  20
    /  \
   15   7
```
return its level order traversal as:
```javascript
[
  [3],
  [9,20],
  [15,7]
]
```

<details>
  <summary>High Level Solution</summary>
  
    If there is no root node, return an empty list. Create a queue with the root node and the level 0. While the queue is not empty, take the first item. If the there are no nodes in the return level yet, create a new array with the node value in it. If it is not the first, simply push it to the list. Add the left and the right nodes to the queue, with the increased level. 

  Time complexity: O(n), Space complexity: O(1)
</details>