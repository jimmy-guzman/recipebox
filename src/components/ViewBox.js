import React from "react";
import AddIngredientForm from "./AddIngredientForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ViewBox = props => {
  const transitionOptions = {
    classNames: "slide-right",
    timeout: { enter: 500, exit: 300 }
  };
  return (
    <div className="viewbox__container grid__col--6">
      <header className="viewbox__header">
        <h1>{props.selectedRecipe ? props.selectedRecipe.name : null}</h1>
      </header>

      <TransitionGroup component="ul" className="viewbox__list">
        {props.selectedRecipe
          ? props.selectedRecipe.ingredients.map((ingredient, index) => (
              <CSSTransition {...transitionOptions} key={index}>
                <li className="viewbox__item" key={index}>
                  <input
                    value={ingredient}
                    onChange={e =>
                      props.updateIngredient(
                        props.selectedRecipeIndex,
                        index,
                        e.target.value
                      )
                    }
                    readOnly="true"
                    onDoubleClick={e => (e.target.readOnly = "")}
                    onBlur={e => (e.currentTarget.readOnly = "true")}
                  />
                  <button
                    className="btn__secondary"
                    onClick={() =>
                      props.removeIngredient(props.selectedRecipeIndex, index)
                    }
                  >
                    X
                  </button>
                </li>
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
export default ViewBox;
