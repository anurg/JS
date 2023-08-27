// "use strict";
// alert("Hello");

// console.log(student1);
// console.log(student2);
// console.log(student3);
var student1 = "Alice";
let student2 = "Bob";
const student3 = "Charlie";
// console.log(add_Declaration(2, 3));
// console.log(add_Expression_with_var); // Prints: undefined

// function add_Declaration(a, b) {
//   return a + b;
// }

// const add_Expression = function (a, b) {
//   return a + b;
// };

// const add_ArrowFunction = (a, b) => a + b;

// var add_Expression_with_var = function (a, b) {
//   return a + b;
// };

// console.log(this);
// const calcAge = function (currYear, birthYear) {
//   console.log(this);
//   return currYear - birthYear;
// };

// calcAge(2023, 1973);

// const dave = {
//   birthYear: 1981,
//   calcAgeDave: function (currYear) {
//     console.log(this);
//     console.log(currYear - this.birthYear);
//   },
// };

// dave.calcAgeDave(2023, 1973);

// const eve = {
//   birthYear: 2000,
// };

// eve.calcAgeEve = dave.calcAgeDave;
// eve.calcAgeEve(2023);

// const myFunc = dave.calcAgeDave;
// myFunc(2023);

// const felicia = {
//   firstName: "Felicia",

//   // Avoid using arrow functions as methods since they can lead to errors
//   greet: () => {
//     console.log(this);
//     console.log(`Hi ${this.firstName}`);
//   },

//   // Prefer function expressions as methods instead
//   greet2: function () {
//     console.log(this); // Now 'this' refers to the object calling the method, which is felicia
//     console.log(`Hi ${this.firstName}`);
//   },
// };
// felicia.greet(); // Prints: undefined
// felicia.greet2(); // Prints: 'Hi Felicia'

// const anotherSummation = function (a, b) {
//   console.log(arguments);
//   // 'arguments' is an array. Hence we could cycle through each element and do computations on the arguments if required
//   return a + b;
// };
// anotherSummation(2, 3, 4, 5, 6);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // This function is an example of returning two or more than two items from a single function
  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// The variables names should exactly match the property names that we want to retrieve from the object
// Unlike destructuring in arrays, we do not need to specify all the properties
// and the properties can also be specified out-of-order.
// Just like arrays, this now creates 3 new variables
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Prints the values from the restaurant object
