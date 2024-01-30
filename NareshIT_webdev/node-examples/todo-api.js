const express = require("express");
const mongoClient = require("mongodb").MongoClient;
const cors = require("cors");

const app = express();
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

var conStr = "mongodb://127.0.0.1:27017";

app.get("/users", (request, response) => {
  mongoClient.connect(conStr).then((clientObject) => {
    const database = clientObject.db("tododb");
    database
      .collection("users")
      .find({})
      .toArray()
      .then((documents) => {
        response.send(documents);
        response.end();
      });
  });
});
app.post("/register-user", (request, response) => {
  var user = {
    UserId: request.body.UserId,
    UserName: request.body.UserName,
    Password: request.body.Password,
    Email: request.body.Email,
    Mobile: request.body.Mobile,
  };
  mongoClient.connect(conStr).then((clientObject) => {
    const database = clientObject.db("tododb");
    database
      .collection("users")
      .insertOne(user)
      .then(() => {
        console.log("New User Created.");
        response.redirect("/users");
      });
  });
});

app.listen(6060);
console.log("Server started at http://127.0.0.1:6060");

// [{"_id":"65b8a8748cec346105219097","UserId":"sam_nit","UserName":"samson","Password":"sam@123","Email":"sams@gmail.com","Mobile":"+919184457882"},{"_id":"65b8e8c976fe6502179d3073","UserId":"john_web","UserName":"John Web","Password":"john","Email":"johnweb@gmail.com","Mobile":"+919868599145"}]
