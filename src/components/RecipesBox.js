import React from "react";
import Recipe from "./Recipe";
import AddRecipeForm from "./AddRecipeForm";

const RecipesBox = props => {
  return (
    <div className="recipes__container grid__col--6">
      <header className="recipes__header">
        <h1>Recipes</h1>
      </header>

      <ul className="recipes__list">
        {Object.keys(props.recipes).map((recipe, index) => (
          <Recipe
            details={props.recipes[recipe]}
            key={recipe}
            index={index}
            selectRecipe={props.selectRecipe}
            removeRecipe={props.removeRecipe}
            updateRecipe={props.updateRecipe}
          />
        ))}
        <AddRecipeForm addRecipe={props.addRecipe} />
      </ul>
    </div>
  );
};
export default RecipesBox;
