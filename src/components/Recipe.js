import React from "react";

const Recipe = props => {
  return (
    <li className="recipes__item">
      <input
        value={props.details.name}
        onClick={() => props.selectRecipe(props.index)}
      />
      <button
        className="btn__secondary"
        onClick={() => props.removeRecipe(props.index)}
      >
        X
      </button>
    </li>
  );
};
export default Recipe;
