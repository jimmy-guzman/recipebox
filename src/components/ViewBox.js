import React from "react";
import PropTypes from "proptypes";
import { Link } from "react-router-dom";

import BackIcon from "./SVGs/BackIcon";
import Ingredients from "./Ingredients";

const ViewBox = props => {
  const recipeId = props.match.params.recipe;
  const i = props.recipes.findIndex(recipe => recipe.recipeId === recipeId);
  const recipeIngredients = props.ingredients[recipeId] || [];

  return (
    <div className="box__container  grid__col--6">
      <header className="box__header">
        <input
          value={props.recipes[i].name}
          onChange={e => props.updateRecipe(i, e.target.value)}
          readOnly="true"
          onDoubleClick={e => (e.target.readOnly = "")}
          onBlur={e => (e.currentTarget.readOnly = "true")}
        />

        <Link to="/">
          <BackIcon height={24} width={24} />
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
