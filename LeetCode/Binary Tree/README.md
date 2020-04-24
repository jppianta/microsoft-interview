# Binary Tree

## Problems

### 94. Binary Tree Inorder Traversal
Given a binary tree, return the inorder traversal of its nodes' values.

Example:
Input: `[1,null,2,3]`
```javascript
   1
    \
     2
    /
   3
```
Output: `[1,3,2]`

Follow up: Recursive solution is trivial, could you do it iteratively?

<details>
  <summary>High Level Solution</summary>
  
  #### Recursive
  Create a recursive function `inorderRec` that receives a node. If the node is undefined, return undefined. Save on a variable the recursive call to the left node. Push the current node value to the result and return the concatanation with the recursive call to the right node.

  Time complexity: O(n), Space complexity: O(1)
</details>

### 98. Validate Binary Search Tree
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:
```javascript
    2
   / \
  1   3
```
Input: [2,1,3]
Output: true

Example 2:
```javascript
    5
   / \
  1   4
     / \
    3   6
```
Input: `[5,1,4,null,null,3,6]`
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

<details>
  <summary>High Level Solution</summary>
  
  Create a recursive function `isBSTRec` that receives a node, a low bound and a high bound. Save the recursive call to the left, replacing the higher bound with the current node val. Save the recursive call to the right, replacing the lower bound with the current node val. Return the return on both sides and if the current value is between both bounds.

  Time complexity: O(n), Space complexity: O(1)
</details>

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

  Time complexity: O(n), Space complexity: O(n)
</details>

### 103. Binary Tree Zigzag Level Order Traversal   
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,
```javascript
    3
   / \
  9  20
    /  \
   15   7
```
return its zigzag level order traversal as:
```javascript
[
  [3],
  [20,9],
  [15,7]
]
```

<details>
  <summary>High Level Solution</summary>
  
  If there is no root node, return an empty list. Create a queue with the root node, the level 0 and the direction. While the queue is not empty, take the first item. If the there are no nodes in the return level yet, create a new array with the node value in it. If it is not the first, push it to the end if it is zigging and put in the begging of the list if it is zagging. Add the left and the right nodes to the queue, with the increased level and not the direction.

  Time complexity: O(n), Space complexity: O(n)
</details>