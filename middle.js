const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ " + `Assertion Passed:  ${actual}  ===  ${expected}`);
  } else {
    console.log("🔴 " + `Assertion Failed:  ${actual}  !==  ${expected}`);
  }
};
function eqArrays(arr1, arr2){
    for (let i = 0; i < arr1.length ; i++) {
      if (arr1[i] === arr2[i] && (i < arr1.length - 1)) {
        continue;
      }
      else if (arr1[i] === arr2[i] && (i === arr1.length - 1)) {
        return true;
      }
      else {
        return false
      }
    }
  }
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed : ${(actual)} === ${(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed : ${(actual)} !== ${(expected)}`);
    }
  };

  const middle = function(arr) {
    let length = arr.length;
    if(length === 0 || length === 1 || length === 2){
      return []
    } else if (length % 2 === 0){
      let index = length / 2;
      return [arr[index - 1], arr[index]]
    } else {
      let index = Math.floor(length / 2);
      return [arr[index]];
    }
  }
  module.exports = middle;
//   //Test//
// assertArrayEqual(middle([1,2,3]),[2]);
// assertArrayEqual(middle([1,2,3,4]), [2,3]);
// assertArrayEqual(middle([]),[]);
// assertArrayEqual(middle([1,2,3,4]),[2]); //false
// assertArrayEqual(middle([1,2,3,4]),[2,3]);
// assertArrayEqual(middle([1]),[]);
// assertArrayEqual(middle([1,2]),[]);
// assertArrayEqual(middle([1,2]),[1]); //false 