import React, { useState } from "react";
import { data } from "../../recipeListResults.js";
import Navbar from "./navbar/Navbar.jsx";
import HomeScreen from "./main/HomeScreen.jsx";

export const App = () => {
  let [fullRecipeList, setFullRecipeList] = useState(data.results);

  return (
    <div>
      <Navbar />
      <h1>Do you like: {fullRecipeList[0].title} ?</h1>
      <HomeScreen />
    </div>
  );
};
