import React from "react";
import PropTypes from "proptypes";
import { Link } from "react-router-dom";

import Ingredients from "./Ingredients";

const ViewBox = props => {
  const recipeId = props.match.params.recipe;
  const i = props.recipes.findIndex(recipe => recipe.recipeId === recipeId);
  const recipeIngredients = props.ingredients[recipeId] || [];

  return (
    <div className="box__container box__container--ingredients grid__col--6">
      <header className="box__header">
        <h1>{props.recipes[i].name}</h1>
        <Link to="/">
          <span className="close">X</span>
        </Link>
      </header>

      <Ingredients recipeIngredients={recipeIngredients} {...props} />
    </div>
  );
};

ViewBox.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  updateIngredient: PropTypes.func.isRequired
};
export default ViewBox;
