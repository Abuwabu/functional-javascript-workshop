/*jslint node: true, esversion: 6 */
"use strict";



// Implement Array#reduce using recursion.
// Your reduce function will be passed an array of words, and a function,
// and an initial value which will return an object containing the counts
// for each word found in the array. You don't need to implement
// this functionality, it will be supplied to your reduce implementation.
//
//    function toUpperArray(items) {
//      if (!items.length) return []             // end condition
//      var head = items[0]                      // item to operate on
//      head = head.toUpperCase()                // perform action
//      var tail = items.slice(1)                // next
//      return [head].concat(toUpperArray(tail)) // recursive step
//     }
//
//  toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']
//
// * arr: An Array to reduce over
// * fn: Function to use as the reduction step. Like regular Array#reduce,
//       this function must be passed previousValue, currentValue, index
//       and the array we're iterating over.
// * init: Initial value of the reduction.
//         Unlike Array#reduce, this value is required.
//
//      reduce([1,2,3], function(prev, curr, index, arr) {
//        return prev + curr
//      }, 0)
//      // => 6
//
// * Do not use any for/while loops.
// * Do not use any Array methods like Array#map or Array#reduce.



function reduce(arr, fn, initial) {
  const head = arr[0];
  const tail = arr.slice(1);
  initial = fn(initial, head);

  if (tail.length > 0) return reduce(tail, fn, initial);
  return initial;
}

module.exports = reduce;
