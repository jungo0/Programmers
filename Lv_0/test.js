function getLengthOfLongestElement(arr) {
    return arr.reduce(function(num1, num2){
      if (num1.length >= num2.length) {
        return num1.length;
      } else {
        return num2.length;
    }},0);
  }

  let output = getLengthOfLongestElement(['one', 'two', 'three']);
  console.log(output); // --> 5