/*
Problem: 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
*/

const Problem = require('../../Problem.js');

module.exports = class PalindromePermutation extends Problem {
  name = 'Palindrome Permutation'
  cases = [
    { inp: 'Tact Coa', out: true },
    { inp: 'Tact Ca', out: true },
    { inp: 'Tact Coao Bob', out: true },
    { inp: 'Tact Co', out: false },
    { inp: '', out: true },
  ]

  /*
    First puts all chars in lower case and remove spaces. Then map the occurence of each char in the string.
    If the number os odd occurences of a character is smaller or equal to 1 (char in the middle of a odd size string),
    the string is a permutation of a palindrome
    Time: O(n), Space: O(n)
  */
  run(inp) {
    inp = inp.toLowerCase().replace(/\s/g, '').split('');

    const inpMap = {};

    inp.forEach(ch => {
      if (!inpMap[ch]) {
        inpMap[ch] = 1;
      } else {
        inpMap[ch]++;
      }
    });

    let odds = 0;
    Object.keys(inpMap).forEach(key => {
      const val = inpMap[key];
      if (val % 2 !== 0) {
        odds++;
      }
    });

    return odds <= 1;
  }
}