import React from "react";
import PropTypes from "proptypes";

import AddIngredientForm from "./AddIngredientForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Ingredient from "./Ingredient";

const ViewBox = props => {
  const transitionOptions = {
    classNames: "slide-right",
    timeout: { enter: 500, exit: 300 }
  };
  return (
    <div className="box__container box__container--ingredients grid__col--6">
      <header className="box__header">
        <h1>{props.selectedRecipe ? props.selectedRecipe.name : null}</h1>
      </header>

      <TransitionGroup component="ul" className="box__list">
        {props.selectedRecipe
          ? props.selectedRecipe.ingredients.map((ingredient, index) => (
              <CSSTransition {...transitionOptions} key={index}>
                <Ingredient
                  key={index}
                  name={ingredient}
                  index={index}
                  updateIngredient={props.updateIngredient}
                  removeIngredient={props.removeIngredient}
                  selectedRecipeIndex={props.selectedRecipeIndex}
                />
              </CSSTransition>
            ))
          : null}
        <AddIngredientForm
          addIngredient={props.addIngredient}
          selectedRecipeIndex={props.selectedRecipeIndex}
        />
      </TransitionGroup>
    </div>
  );
};

ViewBox.propTypes = {
  selectedRecipeIndex: PropTypes.number.isRequired,
  selectedRecipe: PropTypes.object.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  updateIngredient: PropTypes.func.isRequired
};
export default ViewBox;
