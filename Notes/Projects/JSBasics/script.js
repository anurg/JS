// x = 2.3;
// let country = "India";
// let continent = "Asia";
// let population = 1360000000;
// let finPopulation = 600000000000;
// let isIsland = false;
// let language = ["Hindi", "English", "Sanskrit", "Punjabi"];
// console.log(country);
// console.log(continent);
// population++;
// console.log(population);

// console.log(isIsland);
// console.log(language);
// language.forEach(function (x) {
//   console.log("We speak " + x);
// });
// if (isIsland != true) {
//   let string = `${country} is not an Island`;
//   console.log(string);
// }
// if (finPopulation >= population) {
//   console.log(`Finland has more population than ${country}`);
// } else {
//   console.log(`${country} has more poluation than Finland.`);
// }
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }
// for (i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log(
//   `${country} is in ${continent} and its population is ${population}`
// );
// console.log("hello", "Anurag");
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);
// let currentYear = "2020";
// console.log("In 10 years, it will be " + Number(currentYear) + 10); // Prints: In 10 years, it will be 202010
// console.log(Number(currentYear) + 10); // Prints:2030
// console.log(Number("RGBK21")); // Prints: NaN
// console.log(typeof NaN);
// console.log(typeof undefined); // Prints: "undefined"
// console.log(typeof null); // Prints: "object"
// console.log(18 === "18"); // Prints: false
// console.log(18 == "18"); // Prints: true
// let day = "Sunday";
// switch (day) {
//   case "Monday":
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     console.log("Its Weekday");
//     break;
//   default:
//     console.log("Its Weekend");
// }
// const age = 19;
// let drink = age > 18 ? "Wine" : "Water";
// console.log(`You can drink ${drink}`);

// const calcAge1 = function (currentYear, year) {
//   return currentYear - year;
// };
// const calcAge1 = (currentYear, year) => currentYear - year;

// console.log(calcAge1(2023, 2004));
const years = new Array(2021, 2022, 2023);
years[2] = 2024;
years[4] = 2025;
const x = years.push(2011);
const y = years.unshift(2026);
// console.log(years);
// years.shift();
// console.log(years);
// years.pop();

// console.log(years);
// console.log(years.length);
// console.log(typeof years[3]);
// years = [];
// console.log(x);
// console.log(y);
// console.log(years.indexOf(20251));
// console.log(years.includes("2025"));
let bob = {
  firstName: "Bob",
  lastName: "Dylan",
  age: 32,
  friends: ["Alice", "Charles", "Dave"],
};
// console.log(bob);
// console.log(bob.friends);
// console.table(bob);

// console.log(bob["age"]);
// bob.job = "Painter";
// bob["hobbies"] = ["Painting", "Coding", "Music"];
// console.log(bob["hobbies"]);
// console.log(
//   `${bob.firstName} has ${bob.friends.length} friend out of which his best friend is ${bob.friends[0]}`
// );

let charlie = {
  firstName: "Charlie",
  lastName: "Chaplin",
  birthYear: 1980,
  friends: ["Alice", "Charles", "Dave"],
  hasDrivingLicense: true,
  calcAge: function (currYear, birthYear) {
    this.age = currYear - this.birthYear;
    return this.age;
  },
};

// console.log(charlie.calcAge(2023, charlie.birthYear));
// console.log(charlie["calcAge"](2023, charlie.birthYear));

console.log(`Using property: ${charlie.age}`); // Prints: Using property: undefined (because the property has not been created yet)
console.log(`Using function: ${charlie.calcAge(2020)}`); // Prints: Using function: 30
console.log(`Using property: ${charlie.age}`); // Prints: Using property: 30
