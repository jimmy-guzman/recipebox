import React from "react";
import AddIngredientForm from "./AddIngredientForm";

const ViewBox = props => {
  return (
    <div className="viewbox__container grid__col--6">
      <header className="viewbox__header">
        <h1>{props.selectedRecipe ? props.selectedRecipe.name : null}</h1>
      </header>

      <ul className="viewbox__list">
        {props.selectedRecipe
          ? props.selectedRecipe.ingredients.map((ingredient, index) => (
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
            ))
          : null}
        <AddIngredientForm
          addIngredient={props.addIngredient}
          selectedRecipeIndex={props.selectedRecipeIndex}
        />
      </ul>
    </div>
  );
};
export default ViewBox;
