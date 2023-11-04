const mongoose = require("mongoose");
const Recipes = require("./schema");
// const { Recipes } = schema;
const seedData = require("./modifiedImportData.json");

mongoose
  .connect("mongodb://localhost/testdb")
  .then(() => {
    console.log("connected to database");
    Recipes.collection.drop();
    Recipes.insertMany(seedData)
      .then(() => {
        console.log("The data has been seeded");
        Recipes.countDocuments()
          .then((result) => {
            console.log("count of documents successful:", result);
            mongoose.disconnect();
          })
          .catch((e) => {
            console.log(e.message);
          });
      })
      .catch((e) => {
        console.log(e.message);
      });
  })
  .catch((e) => {
    console.log(e.message);
  });
