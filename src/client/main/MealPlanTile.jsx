import React, { useState } from "react";
import {
  CenteredContainer,
  DayOfWeekHeader,
  SideBySideContainer,
  RecipePhoto,
} from "../sharedStyles/styled.js";

function MealPlanTile({ recipe }) {
  let [showDetails, setShowDetails] = useState(false);
  let details = (
    <CenteredContainer>
      {" "}
      <i style={{ maxWidth: "40vw" }}>{recipe.instructions}</i>{" "}
    </CenteredContainer>
  );

  return (
    <SideBySideContainer>
      <SideBySideContainer>
        <div>
          <a href={recipe.website}>
            <RecipePhoto src={recipe.image} />
          </a>
        </div>
        <div>
          <h2>{recipe.title}</h2>
          <div>
            <p>Prep Time (in minutes): {recipe.prepTimeMin}</p>
            <p>Cook Time (in minutes): {recipe.cookTimeMin}</p>
          </div>
        </div>
      </SideBySideContainer>
      {showDetails ? details : <div></div>}
      <DayOfWeekHeader
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        See More
      </DayOfWeekHeader>
    </SideBySideContainer>
  );
}

export default MealPlanTile;
