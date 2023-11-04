import React from "react";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTitle,
  Submit,
} from "../sharedStyles/styled.js";
/*export const NewPlan = ({ fullRecipeList, setFavList, favList }) => {
  let [filteredList, setFilteredList] = useState(fullRecipeList);
  let [formSubmitted, setFormSubmitted] = useState(false)

  const submitMealSelection = (e) => {
    e.preventDefault()

    let keywordList = [];
    if (e.target[0].checked) {
      keywordList.push('chicken');
    }
    if (e.target[1].checked) {
      keywordList.push('beef');
    }
    if (e.target[2].checked) {
      keywordList.push('vegetarian')
    }
    if (e.target[3].checked) {
      keywordList.push('easy')
    }
    if (e.target[4].checked) {
      keywordList.push('crockpot')
    }
    if (e.target[5].checked) {
      keywordList.push('fancy')
    }
    if (e.target[6].checked) {
      keywordList.push('airfryer')
    }
    if (keywordList.length === 0) {
      setFilteredList(fullRecipeList);
      setFormSubmitted(true);
      return;
    }

    console.log(keywordList, 'is keywordList');
    let newFilteredList = [];
    fullRecipeList.forEach((recipe) => {
      for (let i = 0; i < keywordList.length - 1; i++) {
        if (recipe.keywords.indexOf(keywordList[i]) > -1) {
          newFilteredList.push(recipe);
          return;
        }
      }
    })
    if (newFilteredList.length === 0) {
      console.log('NEW FILTERED LIST WAS EMPTY!!!')
      setFilteredList(fullRecipeList)
      setFormSubmitted(true);
      return;
    }
    console.log(newFilteredList);
    setFilteredList(newFilteredList);
    setFormSubmitted(true);
  }

  let visable;
  if (!formSubmitted) {
    visable = <MealPlanForm submitMealSelection={submitMealSelection} />
  } else {
    visable = <WeekPlan filteredList={filteredList} favList={favList} setFavList={setFavList} />
  }
  return <div>
    {visable}
  </div>
}*/
function NewPlanForm(
  {
    /*submitMealSelection*/
  }
) {
  const submitMealSelection = (e) => {
    e.preventDefault();
    console.log("Chicken Selected:", e.target[0].checked);
    console.log("Beef Selected:", e.target[1].checked);
    console.log("Vegetarian Selected:", e.target[2].checked);
    console.log("Easy :", e.target[3].checked);
    console.log("Crockpot :", e.target[4].checked);
    console.log("Fancy :", e.target[5].checked);
    console.log("Air Fryer:", e.target[6].checked);
  };

  return (
    <div>
      <StyledTitle>
        <h2>Customizing Your MealPlan</h2>
        <i>
          Select as many options as you would like. In order to have the widest
          variety, try not selecting any filters at all!
        </i>
      </StyledTitle>
      <StyledForm
        onSubmit={(e) => {
          submitMealSelection(e);
        }}
      >
        <StyledLabel>Meat Preference:</StyledLabel>
        <StyledInput>
          <input type="checkbox" id="chicken" name="meat" value="chicken" />
          <label htmlFor="chicken">Chicken</label>
        </StyledInput>
        <StyledInput>
          <input type="checkbox" id="beef" name="meat" value="beef" />
          <label htmlFor="beef">Beef</label>
        </StyledInput>
        <StyledInput>
          <input
            type="checkbox"
            id="vegetarian"
            name="meat"
            value="vegetarian"
          />
          <label htmlFor="vegetarian">Vegetarian</label>
        </StyledInput>
        <StyledLabel>Cooking Style/Skill Level:</StyledLabel>
        <StyledInput>
          <input type="checkbox" id="easy" name="cooking" value="easy" />
          <label htmlFor="easy">Easy-Peasy</label>
        </StyledInput>
        <StyledInput>
          <input
            type="checkbox"
            id="crockpot"
            name="cooking"
            value="crockpot"
          />
          <label htmlFor="crockpot">Crockpot</label>
        </StyledInput>
        <StyledInput>
          <input type="checkbox" id="fancy" name="cooking" value="fancy" />
          <label htmlFor="fancy">Fancy/Skilled Chef</label>
        </StyledInput>
        <StyledInput>
          <input
            type="checkbox"
            id="airfryer"
            name="cooking"
            value="airfryer"
          />
          <label htmlFor="airfryer">Air Fryer</label>
        </StyledInput>
        <Submit type="submit" />
      </StyledForm>
    </div>
  );
}

export default NewPlanForm;
