const UniqueChars = require('./UniqueChars');
const Permutation = require('./Permutation');
const URLify = require('./URLify');
const PalindromePermutation = require('./PalindromePermutation');
const OneAway = require('./OneAway');
const StringCompression = require('./StringCompression');

module.exports = problems = [
  new UniqueChars(),
  new Permutation(),
  new URLify(),
  new PalindromePermutation(),
  new OneAway(),
  new StringCompression()
];