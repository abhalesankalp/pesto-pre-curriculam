function curry(callback) {
  return function(firstNumber) {
    return function(secondNumber) {
      return callback(firstNumber, secondNumber);
    };
  };
}

// usage
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

let curriedSum = curry(sum);
