/*jslint node: true, esversion: 6 */
"use strict";


// Return a function that takes a list of valid users,
// and returns a function that returns true if all of the
// supplied users exist in the original list of users.
//
// You only need to check that the ids match.
// Use array#some and Array#every to check every user passed to
// your returned function exists in the array passed to the exported function.
//
//   var goodUsers = [
//     { id: 1 },
//     { id: 2 },
//     { id: 3 }
//   ]
//
//   var testAllValid = checkUsersValid(goodUsers)
//
//   testAllValid([
//     { id: 2 },
//     { id: 1 }
//   ])
//   // => true

//   testAllValid([
//     { id: 2 },
//     { id: 4 },
//     { id: 1 }
//   ])
//   // => false
//
// * goodUsers: a list of valid users
// * Do not use any for/while loops or Array#forEach.
// * Do not create any unnecessary functions e.g. helpers.



function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // check that id of submitted user === 'some' id in goodUser
    // check that 'every' submitted user passes this test
    return submittedUsers.every(function (submitterUser) {
      return goodUsers.some(function (goodUser) {
        return submitterUser.id === goodUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;
