"use strict";

// function sol(...args) {
//   const arr = [...args];

//   function sym(arr1, arr2) {
//     let result = [];
//     arr1.forEach((element) => {
//       if (arr2.indexOf(element) < 0 && result.indexOf(element) < 0) {
//         result.push(element);
//       }
//     });

//     arr2.forEach((element) => {
//       if (arr1.indexOf(element) < 0 && result.indexOf(element) < 0) {
//         result.push(element);
//       }
//     });

//     return result;
//   }
//   return arr.reduce(sym);
// }

function sol(...args) {
  //create a reduce method that would reduce array to a single element

  const arr = [...args];
  //define the reduce call back function
  function sym(acc, cur) {
    //create a new set of the accumulator and the current
    let newArr1 = new Set(acc);
    let newArr2 = new Set(cur);

    //loop through the current set, and check if accumulator set has the value
    for (const val of newArr2) {
      //if it has the value, remove it from the accumulator set
      if (newArr1.has(val)) {
        newArr1.delete(val);
      }
      //if it doesn't have the value, add it to the accumulator set
      else {
        newArr1.add(val);
      }
    }
    // return the accumulator set.
    return newArr1;
  }
  return arr.reduce(sym);
}

console.log(sol([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));

//see visual representaton below
// 3 2 5
// 2 1 5 7

//3 1 7 .. arr1

//3 4 6 ..arr2

//1 7
//1 7 4
// 1 7 4 6 ..arr1

//1 2 3 ... arr2

// 7 4 6
//7 4 6 2
//7 4 6 2 3
