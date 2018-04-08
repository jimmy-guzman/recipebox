import React, { Component } from "react";
import PropTypes from "proptypes";

const Ingredient = props => (
  <li className="box__item">
    <input
      value={props.name}
      onChange={e =>
        props.updateIngredient(
          props.selectedRecipeIndex,
          props.index,
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
        props.removeIngredient(props.selectedRecipeIndex, props.index)
      }
    >
      X
    </button>
  </li>
);

Ingredient.propTypes = {
  selectedRecipeIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  updateIngredient: PropTypes.func.isRequired
};

export default Ingredient;
