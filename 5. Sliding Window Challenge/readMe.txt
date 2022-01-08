Reversing an array
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.

Pseudocode for first problem

1. make a duplicate of the original array using the space operator
3. On the copy of the original, apply the .reverse()

Pseudocode for second problem
1. find the middle number for the given array using Math.floor(arrLength / 2); and assign it to a variable
2. Run a for loop that with the defined variable as length determining the loop
3 this is the main logic... for each iteration of the loop, we are going to have a varible called
holder, that would temporarily hold the current value; then we would swap the current value with the last value in the array,
and then reassign holder to now carry the last value

############################
holder = arr[i];
const count = 1
arr[i] = arr[arrLength - count];
arr[arrLength - count] = holder;
count++;
  

