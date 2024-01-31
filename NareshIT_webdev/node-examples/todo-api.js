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

app.get("/appointments/:userid", (request, response) => {
  mongoClient.connect(conStr).then((clientObject) => {
    const database = clientObject.db("tododb");
    database
      .collection("appointments")
      .find({ UserId: request.params.userid })
      .toArray()
      .then((documents) => {
        response.send(documents);
        response.end();
      });
  });
});

app.post("/add-task", (request, response) => {
  const task = {
    Id: parseInt(request.body.Id),
    Title: request.body.Title,
    Date: new Date(request.body.Date),
    Description: request.body.Description,
    UserId: request.body.UserId,
  };

  mongoClient.connect(conStr).then((clientObject) => {
    const database = clientObject.db("tododb");
    database
      .collection("appointments")
      .insertOne(task)
      .then(() => {
        response.send("Appointment Added!");
        response.end();
      });
  });
});

app.put("/edit-task/:id", (request, response) => {
  var id = parseInt(request.params.id);
  mongoClient.connect(conStr).then((clientObject) => {
    const database = clientObject.db("tododb");
    database
      .collection("appointments")
      .updateOne(
        { Id: id },
        {
          $set: {
            Id: parseInt(request.body.Id),
            Title: request.body.Title,
            Date: new Date(request.body.Date),
            Description: request.body.Description,
            UserId: request.body.UserId,
          },
        }
      )
      .then(() => {
        response.send("Record updated.");
        response.end();
      });
  });
});

app.delete("/delete-task/:id", (request, response) => {
  const id = parseInt(request.params.id);
  mongoClient.connect(conStr).then((clientObject) => {
    const database = clientObject.db("tododb");
    database
      .collection("appointments")
      .deleteOne({ Id: id })
      .then(() => {
        console.log("Task Deleted!");
        response.send("Record Deleted!");
        response.end();
      });
  });
});
app.listen(6060);
console.log("Server started at http://127.0.0.1:6060");

// [{"_id":"65b8a8748cec346105219097","UserId":"sam_nit","UserName":"samson","Password":"sam@123","Email":"sams@gmail.com","Mobile":"+919184457882"},{"_id":"65b8e8c976fe6502179d3073","UserId":"john_web","UserName":"John Web","Password":"john","Email":"johnweb@gmail.com","Mobile":"+919868599145"}]
