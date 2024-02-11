function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

// module.exports --> {}
// console.log(module.exports)
console.log("inside maths");

module.exports = { add, minus, multiply };
