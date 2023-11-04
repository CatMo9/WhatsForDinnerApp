const mongoose = require("mongoose");
const schema = require("./schema");
const Recipe = schema.Recipe;


mongoose
  .connect("mongodb://localhost/testdb")
  .then(() => {
    console.log("I think we are connected to the DB!");
  })
  .catch((e) => {
    console.log(e.message);
  });

function saveNewRecipe(recipeInfo) => {
  // const recipeObject = {
  //   title: recipeInfo.title,
  //   image: recipeInfo.image,
  //   ingredients: recipeInfo.ingredients,
  //   totalTimeMin: recipeInfo.totalTimeMin,
  //   cookTimeMin: recipeInfo.cookTimeMin,
  //   prepTimeMin: recipeInfo.prepTimeMin,
  //   instructions:recipeInfo.instructions,
  //   keywords:recipeInfo.keywords,
  //   website:recipeInfo.website
  // }

  //does this work to save a newRecipe with the recipeInfo from the function? Or do I need to create a new Object? (If so use recipeObject from above)
  const newRecipe = new Recipe(recipeInfo)

  newRecipe.save().then(()=>(console.log("Recipe has been saved"))).catch((e)=> console.log(e.message))
}