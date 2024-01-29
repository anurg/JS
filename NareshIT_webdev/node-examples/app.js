const express = require("express");

const app = express();

var products = [
  { Id: 1, Name: "TV", price: 40000, Category: "Electronics" },
  { Id: 2, Name: "Mobile", price: 20000, Category: "Electronics" },
  { Id: 3, Name: "Shoe", price: 4000, Category: "Footwear" },
];
app.get("/", (request, response) => {
  response.send("<h2>This is response from Express</h2>");
});

app.get("/mobiles", (request, response) => {
  response.send("<h2>This is Mobiles Page</h2>");
});

app.get("/watches", (request, response) => {
  response.send("<h2>You aee in Watches Page.</h2>");
});

app.get("/products", (request, response) => {
  //   var products = [
  //     { Id: 1, Name: "TV", price: 40000, Category: "Electronics" },
  //     { Id: 2, Name: "Mobile", price: 20000, Category: "Electronics" },
  //     { Id: 3, Name: "Shoe", price: 4000, Category: "Footwear" },
  //   ];
  response.send(products);
});

app.get("/products/:id", (request, response) => {
  //   var products = [
  //     { Id: 1, Name: "TV", price: 40000, Category: "Electronics" },
  //     { Id: 2, Name: "Mobile", price: 20000, Category: "Electronics" },
  //     { Id: 3, Name: "Shoe", price: 4000, Category: "Footwear" },
  //   ];
  var id = request.params.id;

  response.send(products.find((product) => product.Id == id));
});
app.get("/categories/:category", (request, response) => {
  //   var products = [
  //     { Id: 1, Name: "TV", price: 40000, Category: "Electronics" },
  //     { Id: 2, Name: "Mobile", price: 20000, Category: "Electronics" },
  //     { Id: 3, Name: "Shoe", price: 4000, Category: "Footwear" },
  //   ];
  var category = request.params.category;
  response.send(products.filter((product) => product.Category == category));
});
app.get("/c*", (request, response) => {
  response.send("<h2>Custom Route</h2><p> Do you mean Cameras?</p>");
});
app.get("/*", (request, response) => {
  response.send("<h2>Not Found!</h2> <p> Page you requested not found. </p>");
});
app.listen(3000);
console.log(" Express server started on Port 3000. http://127.0.0.1:3000");
