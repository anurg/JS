import express, { response } from "express";

const app = express();
const port = 3000;
var products = [
  { Id: 1, Name: "TV", Price: 40000, Category: "Electronics" },
  { Id: 2, Name: "Mobile", Price: 20000, Category: "Electronics" },
  { Id: 3, Name: "Shoe", Price: 4000, Category: "Footwear" },
];
app.get("/", (request, response) => {
  const date = new Date("2024-02-03T10:19:38.275Z");
  //   const date = new Date();
  const day = date.getDay();

  let type = "a Weekday";
  let adv = "Its time to work hard.";

  console.log(date);
  console.log(day);
  if (day === 0 || day === 6) {
    type = "Weekend";
    adv = "Its time to have Fun!";
  }
  response.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});
app.get("/products", (request, response) => {
  response.render("products.ejs", {
    products: products,
  });
});
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
