const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅ " + `Assertion Passed:  ${actual}  ===  ${expected}`);
    } else {
      console.log("🔴 " + `Assertion Failed:  ${actual}  !==  ${expected}`);
    }
  };

  const tail = function (input_value) {
      let temp = []
      if (input_value.length <= 1 || input_value === undefined || input_value === null){
        return []
      } else {
        for (let i = 1; i < input_value.length; i++){
          temp.push(input_value[i])
        }
      }
      return temp
  }

  const words = tail(["hello", "lighthouse", "labs"])

  assertEqual(words.length, 3)
  assertEqual(words[0], "lighthouse")
  assertEqual(words[1], "labs")


