"use strict";

function longestSubString(str) {
  //specify a condition to ensure that if the remaining str length < maxStr
  //length, just return maxStr, so you dont have to get to end of the
  //WRITE CODE HERE
  let maxStr = ""; // console.log(maxStr.indexOf);
  let curStr = "";
  let index;
  for (let i = 0; i < str.length; i++) {
    if (!maxStr) maxStr = str[0];
    if (maxStr.indexOf(str[i + 1]) < 0) maxStr += str[i + 1];
    else {
      index = i + 1;
      curStr = str[index];
      break;
    }
  }

  for (let i = index; i < str.length - 1; i++) {
    if (curStr.indexOf(str[i + 1]) < 0) {
      curStr += str[i + 1];
      curStr.length > maxStr.length && (maxStr = curStr);
      //BUG HERE      /***       * THE moment the string is being built, check for its length       * the moment the length surpasses the length of the maxStr,       * then let current become max       */      console.log(curStr, maxStr);
    } else {
      curStr = str[i + 1];
    }
  }
  console.log(maxStr);
}
console.log(longestSubString("theredridinghoodsaysstopthere"));
console.log(longestSubString("hellothere"));
