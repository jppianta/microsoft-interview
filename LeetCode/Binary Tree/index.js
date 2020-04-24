const LevelOrderTraversal = require('./LevelOrderTraversal');
const ZigZagTraversal = require('./ZigZagTraversal');
const InorderTraversal = require('./Inorder');
const IsBST = require('./isBST');

module.exports = binary = [
  new LevelOrderTraversal(),
  new ZigZagTraversal(),
  new InorderTraversal(),
  new IsBST(),
]