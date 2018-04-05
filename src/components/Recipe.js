import React from "react";

const Recipe = props => {
  return (
    <li className="recipes__item">
      <span>{props.details.name}</span>

      <button className="btn__primary--sm">Delete</button>
    </li>
  );
};
export default Recipe;
