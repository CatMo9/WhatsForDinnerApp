import React, { useState } from "react";
import { data } from '../../recipeListResults.js';


export const App = () => {

  let [fullRecipeList, setFullRecipeList] = useState(data.results);

  return (
    <div>
      <h1>Do you like: {fullRecipeList[0].title} ?</h1>
    </div>
  )
}