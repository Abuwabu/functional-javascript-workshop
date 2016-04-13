/*jslint node: true, esversion: 6 */
"use strict";



// Given an Array of strings, use Array#reduce to create an object that
// contains the number of times each string occured in the array.
// Return the object directly (no need to console.log).
//
//    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
//
//    console.log(countWords(inputWords))
//
//    =>
//    {
//      Apple: 2,
//      Banana: 1,
//      Durian: 3
//    }
//
// * inputWords: An array of random Strings.
// * Do not use any for/while loops or Array#forEach.
// * Do not create any unnecessary functions e.g. helpers.


function countWords(inputWords) {
  // arr.reduce(function(prev, current, index, arr), initial)
  return inputWords.reduce(function (countMap, word) {
    countMap[word] = ++countMap[word] || 1;
    return countMap;
  }, {});
}

module.exports = countWords;
