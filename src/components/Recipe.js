import React, { Component } from "react";

const Recipe = props => (
  <li className="recipes__item">
    <input
      value={props.details.name}
      onClick={() => props.selectRecipe(props.index)}
      onChange={e => props.updateRecipe(e.target.value, props.index)}
    />
    <button
      className="btn__secondary"
      onClick={() => props.removeRecipe(props.index)}
    >
      X
    </button>
  </li>
);

export default Recipe;
