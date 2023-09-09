// import fetch from "node-fetch";
// const promise = fetch(
//   "https://countries-api-836d.onrender.com/countries/name/portugal"
// );
// promise
//   .then(
//     (response) => {
//       // console.log(response.json());
//       return response.json();
//     },
//     (reason) => {
//       console.error(reason.message);
//     }
//   )
//   .then(function (data) {
//     console.log(data);
//   });

// const country = async function (country) {
//   const res = await fetch(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   const data = await res.json();
//   console.log(data[1]);
// };
// country("india");

const arr = [1, 2, 3, 4, 5];
const newArray = [];
arr.forEach((val, ind, arr) => {
  newArray.push(val + ind);
  // console.log(`val: ${val} index: ${ind} array: ${arr}`);
});
console.log(arr);
console.log(newArray);
const arrFilter = arr.filter((x) => x > 3);
console.log(arr);
console.log(arrFilter);
const first = arr.findIndex((x) => x > 1);
console.log(first);

const arrMap = arr.map((x) => {
  if (x % 2 === 0) return x;
  else return 0;
});
console.log(arr);
console.log(arrMap);
