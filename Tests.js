const ctci = require('./Cracking the Coding Interview/Arrays and Strings/index.js');

const leetCode = require('./LeetCode/Binary Tree/index.js');

const problems = ctci.concat(leetCode);
problems.forEach(problem => {
  problem.testAll();
});