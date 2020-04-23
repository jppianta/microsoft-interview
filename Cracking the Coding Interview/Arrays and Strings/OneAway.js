/*
Problem: 1.5: One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away
*/

const Problem = require('../../Problem.js');

module.exports = class OneAway extends Problem {
  name = 'One Away'
  cases = [
    { inp: ['pale', 'ple'], out: true },
    { inp: ['pales', 'pale'], out: true },
    { inp: ['pale', 'bale'], out: true },
    { inp: ['pale', 'bake'], out: false },
    { inp: ['', 'pale'], out: false },
    { inp: ['pale', ''], out: false },
  ]

  /*
    2 Cases: Equal size strings and size diff equal to 1
    First case, you simply verify if there is only one char difference in both strings
    Second case, you create 2 pointers, one for the smaller string, and one for the bigger string.
    while both pointers are not at the end, compare them. If they are equal, move only the bigger string pointer forward.
    If the distance between the pointers becomes higher or equal to 2, return false.
    Time: O(n) -> n is the size of the bigger string. Space: O(1)
  */
  run(inp) {
    const s1 = inp[0];
    const s2 = inp[1];

    const diff = Math.abs(s1.length - s2.length);

    if (diff >= 2) {
      return false;
    }

    if (diff === 0) {
      return this.solveEqualLength(s1, s2);
    } else {
      let biggerSt, smallerSt;
      if (s1.length > s2.length) {
        biggerSt = s1;
        smallerSt = s2;
      } else {
        biggerSt = s2;
        smallerSt = s1;
      }

      let smallPt = 0, bigPt = 0;

      while(smallPt < smallerSt.length && bigPt < biggerSt.length) {
        if (smallerSt[smallPt] === biggerSt[bigPt]) {
          smallPt++;
          bigPt++;
        } else {
          bigPt++;
          if (bigPt - smallPt >= 2) {
            return false;
          }
        }
      }

      return true;
    }
  }

  solveEqualLength(s1, s2) {
    let diffChars = 0;
    for(let i = 0; i<s1.length; i++) {
      if (s1[i] !== s2[i]) {
        diffChars++;
      }
    }

    return diffChars <= 1;
  }
}