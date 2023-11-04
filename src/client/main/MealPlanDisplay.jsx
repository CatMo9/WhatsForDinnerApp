import React, { useState } from "react";
import {
  CenteredContainer,
  DayOfWeekHeader,
  SideBySideContainer,
  RecipePhoto,
} from "../sharedStyles/styled.js";
import MealPlanTile from "./MealPlanTile";

const MealPlanDisplay = ({ fullRecipeList }) => {
  let randomList5;

  const random5Meals = function (mealList) {
    let index;
    let indexList = [];
    let finalList = [];
    for (let i = 0; i < 5; i++) {
      while (indexList.length === i) {
        index = Math.floor(Math.random() * mealList.length);
        if (indexList.indexOf(index) === -1) {
          indexList.push(index);
          finalList.push(mealList[index]);
        }
      }
    }
    randomList5 = finalList;
  };

  random5Meals(fullRecipeList);

  return (
    <CenteredContainer>
      {randomList5.map((recipe) => {
        return <MealPlanTile recipe={recipe} key={recipe.title} />;
      })}
    </CenteredContainer>
  );
};

export default MealPlanDisplay;
