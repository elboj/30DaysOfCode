"use strict";

function maxArray(arr, k) {
  //create a max and current variable
  let max = 0;
  let current = 0;
  //Run an initial loop for specified length to assign max value
  for (let i = 0; i < k; i++) max += arr[i];
  console.log(max);
  //implementing sliding window, by removing the first index, and addink k+ 1 index
  for (let i = k; i < arr.length; i++) {
    current += arr[i] - arr[i - k];
    max = Math.max(current, max);
  }
  return max;
}
function maxArray(arr, k) {
  //write code here
}

console.log(maxArray([100, 200, 300, 100, 400, 123, 400, 600, 400], 3));

// 400 200 300 >> 900 max
// 900 + 100 - 400 >> 600
// 600 + 400 - 200 >> 800
