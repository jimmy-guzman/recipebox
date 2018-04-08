import React from "react";
import PropTypes from "proptypes";
import Recipe from "./Recipe";
import AddRecipeForm from "./AddRecipeForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const RecipesBox = props => {
  const transitionOptions = {
    classNames: "slide-left",
    timeout: { enter: 500, exit: 500 }
  };
  return (
    <div className="box__container box__container--recipes grid__col--6">
      <header className="box__header">
        <h1>Recipes</h1>
      </header>

      <TransitionGroup component="ul" className="box__list">
        {Object.keys(props.recipes).map((recipe, index) => (
          <CSSTransition {...transitionOptions} key={recipe}>
            <Recipe
              details={props.recipes[recipe]}
              key={recipe}
              index={index}
              selectRecipe={props.selectRecipe}
              removeRecipe={props.removeRecipe}
              updateRecipe={props.updateRecipe}
            />
          </CSSTransition>
        ))}
        <AddRecipeForm addRecipe={props.addRecipe} />
      </TransitionGroup>
    </div>
  );
};

RecipesBox.propTypes = {
  recipes: PropTypes.array.isRequired,
  selectRecipe: PropTypes.func.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  addRecipe: PropTypes.func.isRequired
};

export default RecipesBox;
