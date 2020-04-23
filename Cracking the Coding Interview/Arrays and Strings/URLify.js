/*
Problem: 1.3: URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string
*/

const Problem = require('../../Problem.js');

module.exports = class URLify extends Problem {
  name = 'URLify'
  cases = [
    { inp: 'Mr 3ohn Smith', out: 'Mr%203ohn%20Smith' },
    { inp: ' Mr 3ohn Smith  ', out: '%20Mr%203ohn%20Smith%20%20' },
    { inp: 'Mr  3ohn Smith', out: 'Mr%20%203ohn%20Smith' },
    { inp: 'Smith', out: 'Smith' },
    { inp: '', out: '' }
  ]

  /*
    Uses replace built it function to replace spaces for %20
    Time: O(n), Space: O(1)
  */
  run(inp) {
    return inp.replace(/\s/g, '%20')
  }

  /*
    For each char in the string, if the char is a space, replace it with a %20
    Time: O(n), Space: O(1)
  */
  runNoLib(inp) {
    inp = inp.split('')

    for (let i = 0; i < inp.length; i++) {
      if (inp[i] === ' ') {
        inp[i] = '%20';
      }
    }

    return inp.join('');
  }

  test(inp, out) {
    const ret1 = this.run(inp);
    const ret2 = this.runNoLib(inp);
    const res = this.compare(ret1, out) && this.compare(ret2, out);
    return { res, ret: [ret1, ret2] }
  }
}