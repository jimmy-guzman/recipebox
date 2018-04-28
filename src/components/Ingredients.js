import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Ingredient from "./Ingredient";
import AddIngredientForm from "./AddIngredientForm";

const Ingredients = props => {
  const transitionOptions = {
    classNames: "fade",
    timeout: { enter: 500, exit: 300 }
  };

  return (
    <TransitionGroup component="ul" className="box__list">
      {props.recipeIngredients.map((ingredient, index) => (
        <CSSTransition {...transitionOptions} key={ingredient}>
          <Ingredient name={ingredient} index={index} {...props} />
        </CSSTransition>
      ))}
      <AddIngredientForm {...props} />
    </TransitionGroup>
  );
};

export default Ingredients;