import React from "react";

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
                <input value={ingredient} />
                <button className="btn__secondary">X</button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
export default ViewBox;
