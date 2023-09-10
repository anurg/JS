// const arr = ["Hello", 1, true, NaN, "Bye", "Byebye"]; // initialise an array of elements

// const num = arr
//   .map((e) => (typeof e === "string" ? 1 : 0))
//   .reduce((acc, val) => acc + val);
// console.log(num);

let arr = [[1, 2, 3, 4, 3], [1, 2], [1, 2, 3, 4, 5, 6], []]; // `initialise a two-dimensional array

const element = arr.map((x) => x.length).reduce((acc, val) => acc + val);
console.log(element);
