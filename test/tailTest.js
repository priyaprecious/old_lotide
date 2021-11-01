const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = tail(["hello", "lighthouse", "labs"])
assertEqual(words.length, 3)
assertEqual(words[0], "lighthouse")
assertEqual(words[1], "labs")