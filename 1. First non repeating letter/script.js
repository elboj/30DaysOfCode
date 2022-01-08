"use strict";

//SOLUTION 1
function firstNonRepeatingLetter(s) {
  //Organize code into object
  let strObj = {};
  for (const letter of s.toLowerCase()) {
    strObj[letter] = (strObj[letter] || 0) + 1;
  }

  for (const key in strObj) {
    if (strObj[key] === 1) {
      const letter =
        s.indexOf(key.toUpperCase()) == -1 ? key : key.toUpperCase();
      return letter;
    }
  }
  return "";
}

//SOLUTION 2

function firstNonRepeatingLetter(s) {
  // Add your code here
  let sLower = s.toLowerCase();
  for (let i = 0; i < sLower.length; i++) {
    const letter = sLower[i];
    if (sLower.indexOf(letter) === sLower.lastIndexOf(letter)) {
      return s[i];
    }
  }
  return "";
}

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

console.log(high("what time are we climbing up the volcano"));
