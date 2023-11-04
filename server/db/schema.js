const mongoose = require("mongoose");

// const ingredientSchema = new mongoose.Schema((
//   String:[Number,String]
// ))

const recipeSchema = new mongoose.Schema({
  title: String,
  image: String,
  ingredients: {},
  totalTimeMin: Number,
  cookTimeMin: Number,
  prepTimeMin: Number,
  instructions: String,
  keywords: [],
  website: String,
});

const Recipes = mongoose.model("Recipes", recipeSchema);

module.exports = Recipes;
