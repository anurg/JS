const arr = ["Hello", 1, true, NaN, "Bye", "Byebye"]; // initialise an array of elements

const num = arr
  .map((e) => (typeof e === "string" ? 1 : 0))
  .reduce((acc, val) => acc + val);
console.log(num);
