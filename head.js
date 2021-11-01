// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//       console.log("✅ " + `Assertion Passed:  ${actual}  ===  ${expected}`);
//     } else {
//       console.log("🔴 " + `Assertion Failed:  ${actual}  !==  ${expected}`);
//     }
//   };

const assertEqual = require('./assertEqual');
  const head = function(input_value) {
      head_value = input_value[0];
      //console.log(head_value)
      return head_value
  }
module.exports = head;