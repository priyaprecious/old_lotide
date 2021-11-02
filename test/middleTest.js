const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');//Test//
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


  assertArraysEqual(middle([1,2,3]),[2]);
  assertArraysEqual(middle([1,2,3,4]), [2,3]);
  assertArraysEqual(middle([]),[]);
  assertArraysEqual(middle([1,2,3,4]),[2]); //false
  assertArraysEqual(middle([1,2,3,4]),[2,3]);
  assertArraysEqual(middle([1]),[]);
  assertArraysEqual(middle([1,2]),[]);
  assertArraysEqual(middle([1,2]),[1]); //false