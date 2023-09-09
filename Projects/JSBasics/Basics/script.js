<<<<<<< HEAD
"use strict";
// const myArray = [0, 1, 2, 3];

// const [a, b, c, d] = myArray;

// console.log(a, b, c, d);

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

const [first, second] = restaurant.starterMenu;
// console.log(first, second);

let [ctgry1, , ctgry3] = restaurant.categories;
// console.log(ctgry1, ctgry3);
[ctgry3, ctgry1] = [ctgry1, ctgry3];
// console.log(ctgry1, ctgry3);

let [starter, main] = restaurant.order(1, 2);
// console.log(starter, main);

// const nestedArray = [1, 2, [3, 4]];
// const [a, b, [c, d]] = nestedArray;
// console.log(a, b, c, d);

// let [p, q, r] = [2, 3];
// console.log(p, q, r); // Prints: 2 3 undefined
// // But now we assign default values for each variable
// [p = 1, q = 1, r = 1] = [2, 3];
// console.log(p, q, r); // Prints: 2 3 1

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: workingHours,
//   categories: tags,
//   menu = [],
// } = restaurant;
// console.log(restaurantName, workingHours, tags, menu);

let amt1 = 100;
let amt2 = 200;
const myObject = { amt1: 1, amt2: 2 };

({ amt1, amt2 } = myObject);
const workingHours = {
  fri: {
    open: 11,
    close: 23,
  },
};

const {
  fri: { open, close },
} = workingHours;
// console.log(open, close);

const printPersonDetailsUsingObj = function (person) {
  console.log(
    `Hi, ${person.name} ! As per our record, you were born in ${person.birthPlace} and have a job ${person.job}`
  );
};

const printPersonDetailsUsingObjDec = function ({ name, birthPlace, job }) {
  console.log(
    `Hi, ${name} ! As per our record, you were born in ${birthPlace} and have a job ${job}`
  );
};

const alice = {
  name: "Alice",
  dob: "1/1/1990",
  birthPlace: "New York",
  job: "Teacher",
  hobbies: ["rock climbing", "pottery", "Music"],
};

// printPersonDetailsUsingObj(alice);
// printPersonDetailsUsingObjDec(alice);
const myArray1 = [5, 6, 7, 8];
const newArray = [1, 2, 3, 4, ...myArray1];
// console.log(newArray);
// console.log(...newArray);

// const myArray3 = [1, 2, 3, 4, myArray1];
// console.log(myArray3);
// const aliceString = JSON.stringify(alice);
// console.log(aliceString);
// const aliceParse = JSON.parse(aliceString);
// console.log(aliceParse);
// const myArray4 = newArray.map((e, index) => 4 * e);
// console.log(myArray4);

// const newArray1 = [1, 2, 3, 4, myArray1];
// const newArray1Copy = JSON.parse(JSON.stringify(newArray1));
// console.log(newArray1Copy);
// const { name, ...restAlice } = alice;
// console.log(name, restAlice);

const addMultipleNumbers = function (...numbers) {
  console.log(`Args is: ${numbers} of type ${typeof numbers}`);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`The final sum is ${sum}`);
};
addMultipleNumbers(1, 2);
addMultipleNumbers(1, 2, 3, 4);
addMultipleNumbers(1, 2, 3, 4, 5);
const arraysAsArgs = [1, 2, 3, 4, 5, 6];
addMultipleNumbers(...arraysAsArgs);

for (const [idx, hobby] of alice.hobbies.entries()) {
  console.log(`Hobby: ${idx} --- ${hobby}`);
}
=======

>>>>>>> f86aeb51dcff13dbab64c7f27010e0abdaa36ee7
