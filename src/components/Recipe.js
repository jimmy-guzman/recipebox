import React, { Component } from "react";
import PropTypes from "proptypes";

const Recipe = props => (
  <li className="box__item">
    <input
      value={props.details.name}
      onClick={() => props.selectRecipe(props.index)}
      onChange={e => props.updateRecipe(e.target.value, props.index)}
      readOnly="true"
      onDoubleClick={e => (e.target.readOnly = "")}
      onBlur={e => (e.currentTarget.readOnly = "true")}
    />
    <button
      className="btn__secondary"
      onClick={() => props.removeRecipe(props.index)}
    >
      X
    </button>
  </li>
);

Recipe.propTypes = {
  index: PropTypes.number.isRequired,
  selectRecipe: PropTypes.func.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  updateRecipe: PropTypes.func.isRequired
};
export default Recipe;
