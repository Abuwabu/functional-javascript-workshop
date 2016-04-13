/*jslint node: true, esversion: 6 */
"use strict";



// Implement a function that takes a function as its first argument, a number num as its second argument,
// then executes the passed in function num times.
// * operation: A Function, takes no arguments, returns no useful value.
// * num: the number of times to call `operation`
// * It's ok to use a loop in your implementation, bonus points if you use recursion instead.



function repeat(operation, num) {
  if (num === 0) return;
  operation();
  repeat(operation, --num);
}

module.exports = repeat;
