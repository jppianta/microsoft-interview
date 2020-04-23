/*
Problem: 1.1: Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?
*/

const Problem = require('../../Problem.js');

module.exports = class UniqueChars extends Problem {
  name = 'Unique Chars'
  cases = [
    { inp: 'abcdef', out: true },
    { inp: 'aabc', out: false },
    { inp: 'abcdeff', out: false },
    { inp: 'abccdef', out: false },
    { inp: '', out: true }
  ]

  /*
    Save char occurences in a dictionary, and if the char is already in the dictionary,
    means that it is not unique.
    Time: O(n), Space: O(n)
  */
  run(inp) {
    const chars = {};
    for (let i = 0; i < inp.length; i++) {
      const ch = inp[i];
      if (chars[ch]) {
        return false;
      }
      chars[ch] = true;
    }
    return true;
  }

  /*
    Sort the string. If the current char is equal to the next, means it is not unique.
    Time: O(nLog n), Space: O(1)
  */
  runNoExtraMem(inp) {
    inp = inp.split('');
    inp.sort();

    for (let i = 0; i < inp.length - 1; i++) {
      if (inp[i] === inp[i + 1]) {
        return false;
      }
    }

    return true;
  }

  test(inp, out) {
    const ret1 = this.run(inp);
    const ret2 = this.runNoExtraMem(inp);
    const res = this.compare(ret1, out) && this.compare(ret2, out);
    return { res, ret: [ret1, ret2] }
  }
}