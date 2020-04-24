# Arrays and Strings

## Problems

### 1.1 - Is Unique
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

<details>
  <summary>High Level Solution</summary>
  
  #### Method 1
  Create a dictionary. For each character in the string, verify if the character is in the dictionary. If it is, return false, else, add the character to the dictionary. In the end, return true.

  Time complexity: O(n), Space complexity: O(n)

  #### Inplace method
  Sort the string. For each character in the string, if the current character is equal to the next character, return false. In the end, return true.

  Time complexity: O(nLog n), Space complexity: O(1)
</details>

### 1.2 - Check Permutation
Given two strings, write a method to decide if one is a permutation of the other.

<details>
  <summary>High Level Solution</summary>

  What you really want to know here is if the collection of characters of both strings are equal.
  
  To do so, create a dictionary and map every character in s1 to the number of occurences of it in the string. Then for each character in s2, if the character is not in s1 dictionary, return false. If it is, decrease the counter on the dictionary and remove if it has 0 occurences. Return if the dictionary is empty.

  Time complexity: O(n), Space complexity: O(n)
</details>

### 1.3 - URLify
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

<details>
  <summary>High Level Solution</summary>
  
  #### Method 1
  Simply call the `replace` method to replace the space char to an `%20`. Remeber to set the space as a RegExp to replace all occurences.

  Time complexity: O(n), Space complexity: O(1)

  #### Non Library Method
  Transform the string into an array of characters. For each character that equals a space, change it to `%20`. Join the elements and return.

  Time complexity: O(n), Space complexity: O(1)
</details>

### 1.4 - Palindrome Permutation
Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

<details>
  <summary>High Level Solution</summary>

  What you really want to know here is if for all characters in the string, there is at most one that appears an odd number of times.
  
  Remove spaces and make it all lower case. Create a dictionary and store the number of occurences of each character. Count the number of characters the appear an odd number of times. Return if this number is smaller or equal to 1.

  Time complexity: O(n), Space complexity: O(n)
</details>

### 1.5 - One Way
There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away

<details>
  <summary>High Level Solution</summary>

  There are actually just two different cases here, if the strings have the same size and if the difference of sizes is equal to one. To add or remove is just a metter of swittching the strings.
  
  Verify the absolute difference of the size of the strings. If the difference is two or greater, return false.

  If it is 0, for each character of the first string, count the number of times it is different to the second string. Return if this number is smaller or equal to one.

  If the difference is one. Name the strings as the smaller string and the bigger string, and create to pointers, the small pointer and the bigger pointer. Both starting at 0.

  While the pointers did not reach the end, compare the characters on both pointers. If they are equal, move both pointers forward. If they are different, move the bigger pointer forward and keep the smaller pointer in place. If the distance between the pointers is equal or bigger then two, return false. In the end, return true. 

  Time complexity: O(n), Space complexity: O(1)
</details>

### 1.6 - String Compression
Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3, If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

<details>
  <summary>High Level Solution</summary>

  If the string is empty return an empty string. If it is not, create a variable for the current character and a variable for a occurence counter. For every character of the string, if the character is equal to the current character, increase the counter, if they are different, append to the result the current character plus the counter, set the current character to the character you are in and set the counter to 1. At the end, append whats is left in the accumlator counter.

  Time complexity: O(n), Space complexity: O(m), where m is the size of the compressed string
</details>