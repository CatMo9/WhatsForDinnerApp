import React, { useState, useEffect } from "react";
import { data } from "../../recipeListResults";
import Navbar from "./navbar/Navbar";
import HomeScreen from "./main/HomeScreen";
import NewPlanForm from "./main/NewPlanForm";
import MealPlanDisplay from "./main/MealPlanDisplay";
import axios from "axios";

export const App = () => {
  let [fullRecipeList, setFullRecipeList] = useState(data.results);
  useEffect(() => {
    axios
      .get("http://localhost:3000/firstConnection")
      .then((res) => {
        console.log("The request has been made");
        console.log("here is the res:", res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  console.log("This is the app", fullRecipeList[0]);

  return (
    <div>
      <Navbar />
      <HomeScreen />
      <NewPlanForm />
      <MealPlanDisplay fullRecipeList={fullRecipeList} />
    </div>
  );
};
