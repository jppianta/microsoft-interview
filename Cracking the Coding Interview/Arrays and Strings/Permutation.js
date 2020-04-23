/*
Problem: 1.2: Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.
*/

const Problem = require('../../Problem.js');

module.exports = class Permutation extends Problem {
  name = 'Permutation'
  cases = [
    { inp: ['abcdefg', 'fgacdbe'], out: true },
    { inp: ['abcde', 'abc'], out: false },
    { inp: ['abcdefg', 'abcdefg'], out: true },
    { inp: ['abcd', 'fgacdbe'], out: false },
    { inp: ['abcdefg', 'fgac'], out: false },
    { inp: ['', 'fgac'], out: false },
    { inp: ['abcdefg', ''], out: false },
    { inp: ['', ''], out: true },
  ]

  /*
    Save first string in a dictionary, mapping each char to the times it occured in s1.
    For each char in s2, if it is not in s1 map, is not a permutation, if it is, decrease the occurence counter.
    If the result of all chars in s2 is true and the strings have the same size, they are a permutation of each other.
    Time: O(n + m), Space: O(n)
  */
  run(inp) {
    const s1 = inp[0].split('');
    const s2 = inp[1].split('');

    const s1Map = {};
    s1.forEach(ch => {
      if (!s1Map[ch]) {
        s1Map[ch] = 1;
      } else {
        s1Map[ch]++;
      }
    });

    let res = true;
    s2.forEach(ch => {
      if (!s1Map[ch]) {
        res = false;
      } else {
        s1Map[ch]--;
        if (s1Map[ch] === 0) {
          delete s1Map[ch];
        }
      }
    });

    return res && s1.length === s2.length;
  }
}