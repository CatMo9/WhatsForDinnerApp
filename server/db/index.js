const mongoose = require("mongoose");
const schema = require("./schema");
const Recipe = schema.Recipe;

mongoose
  .connect("mongodb://localhost/testdb")
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((e) => {
    console.log(e.message);
  });
