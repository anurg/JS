var arr = ["Hello", 1, true, NaN, "Bye"]; // initialise an array of elements
const num = arr
  .map((e) => (typeof e === String ? 1 : 0))
  .reduce((acc, val) => acc + val);
console.log(num);
