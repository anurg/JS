const http = require("http");
const mongoClient = require("mongodb").MongoClient;

http
  .createServer((request, response) => {
    mongoClient
      .connect("mongodb://127.0.0.1:27017")
      .then((clientObject) => {
        var database = clientObject.db("tododb");
        database
          .collection("appointments")
          .find({})
          .toArray()
          .then((documents) => {
            response.writeHead(200, { "content-type": "application/json" });
            response.write(JSON.stringify(documents));
            response.end();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error.message));
  })
  .listen(6600);
console.log("Server Started. http://127.0.0.1:6600");
