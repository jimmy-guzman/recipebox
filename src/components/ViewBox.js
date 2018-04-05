import React from "react";

const ViewBox = () => {
  return (
    <div className="viewbox__container grid__col--6">
      <header className="viewbox__header">
        <h1>Recipe Name</h1>
      </header>

      <ul className="recipes__list">
        <li className="recipes__item">ingredient #1</li>
        <li className="recipes__item">ingredient #2</li>
        <li className="recipes__item">ingredient #3</li>
        <li className="recipes__item">ingredient #4</li>
        <li className="recipes__item">ingredient #5</li>
        <li className="recipes__item">ingredient #6</li>
      </ul>
      <div className="grid__row viewbox__buttons">
        <button className="btn__primary grid__col--6">Create New</button>
        <button className="btn__primary grid__col--6">Edit</button>
      </div>
    </div>
  );
};
export default ViewBox;
