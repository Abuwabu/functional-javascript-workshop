/*jslint node: true, esversion: 6 */
"use strict";



// Convert the following code from a for-loop to Array#map:
//
//   function doubleAll(numbers) {
//     var result = []
//     for (var i = 0; i < numbers.length; i++) {
//       result.push(numbers[i] * 2)
//     }
//     return result
//   }
//
//   module.exports = doubleAll
//
// * numbers: An Array of 0 to 20 Integers between 0 and 9
// * Your solution should use Array.prototype.map()
// * Do not use any for/while loops or Array.prototype.forEach.
// * Do not create any unnecessary functions e.g. helpers.



function doubleAll(numbers) {
  return numbers.map(function (num) {
    return num * 2;
  });
}

module.exports = doubleAll;
