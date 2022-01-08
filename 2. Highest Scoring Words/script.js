"use strict";

function high(x) {
  const checkArr = x.split(" ");
  const arr = x.concat(" ").split("");

  const resultArr = [];
  const obj = {};

  let maxValue = 0;
  let checkSum = 0;

  let val = 1;
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  //populate alphabets
  for (let i = 0; i < alphabets.length; i++) {
    obj[alphabets[i]] = val;
    val++;
  }

  //loop through array
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    //computing checkSum variable
    if (val !== " ") {
      checkSum += obj[val];
    }
    if (val == " ") {
      //checking for highest value and assigning to maxValue
      if (checkSum > maxValue) maxValue = checkSum;
      resultArr.push(checkSum);
      checkSum = 0;
    }
  }
  const index = resultArr.indexOf(maxValue);
  return checkArr[index];
}
