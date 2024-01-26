const mongoClient = require("mongodb").MongoClient;

mongoClient
  .connect("mongodb://127.0.0.1:27017")
  .then((clientObject) => {
    const database = clientObject.db("tododb");
    database
      .collection("appointments")
      .find({})
      .toArray()
      .then((documents) => {
        console.log(documents);
      });
  })
  .catch((error) => {
    console.log(error);
  });
