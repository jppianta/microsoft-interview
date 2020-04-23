/*
Problem: 1.6  Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3, If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). 

*/

const Problem = require('../../Problem.js');

module.exports = class StringCompression extends Problem {
  name = 'String Compression'
  cases = [
    { inp: 'aabcccccaaa', out: 'a2b1c5a3' },
    { inp: 'abc', out: 'abc' },
    { inp: 'aabbcc', out: 'aabbcc' },
    { inp: 'aaabbcc', out: 'a3b2c2' },
    { inp: 'aaabbbc', out: 'a3b3c1' },
  ]

  /*
    If the string is empty return an empty string.
    If it is not, create a variable for the current character and a variable for a occurence counter.
    For every character of the string, if the character is equal to the current character, increase the counter,
    if they are different, append to the result the current character plus the counter, set the current character to
    the character you are in and set the counter to 1.
    At the end, append whats is left in the accumlator counter.
    Time: O(n), Space: O(m) -> m is the size of the compressed string
  */
  run(inp) {
    if (inp === '') {
      return ''
    }

    let res = '';
    let curr = inp[0]
    let acc = 1;
    for (let i = 1; i < inp.length; i++) {
      if (inp[i] !== curr) {
        res += curr + acc;
        curr = inp[i];
        acc = 1;
      } else {
        acc++;
      }
    }
    res += curr + acc;

    return res.length >= inp.length ? inp : res;
  }
}