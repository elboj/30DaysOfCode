"use strict";

//PROBLEM 1
//Given an array, return the maximum sum that can be gotten from adding the specified length of contiguous sub arrar values

function maxSubArraySum(arr, k) {
  //get max value
  let sum = 0;
  let temp = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  temp = sum;
  for (let i = k; i < arr.length; i++) {
    temp -= arr[i - k] - arr[i];
    temp > sum && (sum = temp);
  }
  return sum;
}

//maxSubArray([100, 200, 300, 400], 2);

/**SLIDING WINDOW NOTES
 * The key is to have an initial value to a variable, and then in getting
 * your result, let initial value be equal to temp value
 *
 * Implement your sliding window by adding the next index after the initial
 * value to current, and slide the window by removing the foremost item and
 * then check your condition
 */

//[2, 3, 1, 2, 4, 3]

//Problem 2
//Given an array, find the length of the minimum subarray item that would be equal or greater than the given sum
const minSubArrayLength = function (nums, sum) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  //CREATE INITIAL WINDOW GREATER THAN K USING WHILE LOOP
  while (start < nums.length) {
    //the purpose for the second condition is to keep track
    //of when we have gotten to the last item in the array

    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
      //end keeps track of the index of window end that meets condition
    } //DECREASING WINDOW SIZE IF TOTAL > SUM
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;

      //start ++ here ensures that everything from the right is checked.
    } else {
      // current total less than required total but we reach the end,
      //need this or else we'll be in an infinite loop
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7));

//Problem 3
/***
 * You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less 
than 10-5 will be accepted.

 */

function findMaxAverage(nums, k) {
  let sum = 0;
  let temp = 0;
  let avgSum;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  temp = sum;
  for (let i = k; i < nums.length; i++) {
    temp += nums[i] - nums[i - k];

    if (temp / k > sum / k) {
      sum = temp;
    }
  }
  console.log(sum / k);
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4);

//PROBLEM 4

/***
 * 
 * 1876. Substrings of Size Three with Distinct Characters
Easy

396

15

Add to List

Share
A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
Example 2:

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".
 

Constraints:

1 <= s.length <= 100
s​​​​​​ consists of lowercase English letters.
 */

const goodStr = function (str, k) {
  const arr = str.split("");
  let init = [];
  let curr = "";
  let count = 0;

  for (let i = 0; i < k; i++) {
    init.push(arr[i]);
  }

  let initSet = new Set(init);
  initSet.size === 3 && count++;

  //Implementing the window using slice
  for (let i = k; i < arr.length; i++) {
    curr = arr.slice(i - 2, i + 1);
    let currSet = new Set(curr);
    currSet.size === 3 && count++;
  }

  console.log(count);
};

// goodStr("xyzzaz", 3);
goodStr("aababcabc", 3);
// aababcabc;

// const ttt = new Set([1, 2, 1, 1, 1, 2, 1]);
// console.log(ttt.size);
