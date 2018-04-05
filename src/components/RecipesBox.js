import React from "react";
import Recipe from "./Recipe";

const RecipesBox = props => {
  return (
    <div className="recipes__container grid__col--6">
      <header className="recipes__header">
        <h1>Recipes</h1>
      </header>

      <ul className="recipes__list">
        {Object.keys(props.recipes).map(recipe => (
          <Recipe details={props.recipes[recipe]} key={recipe} index={recipe} />
        ))}
      </ul>
    </div>
  );
};
export default RecipesBox;
